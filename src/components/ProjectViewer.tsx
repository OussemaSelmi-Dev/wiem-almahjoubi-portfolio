"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";

type Viewer = { open: (slug: Project["slug"], index?: number) => void };

const ViewerContext = createContext<Viewer | null>(null);

export function useProjectViewer() {
  const viewer = useContext(ViewerContext);
  if (!viewer) throw new Error("useProjectViewer must be used inside <ProjectViewerProvider>");
  return viewer;
}

/** Wrap a layout in this; any card can then call useProjectViewer().open(slug). */
export function ProjectViewerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ project: Project; index: number } | null>(null);

  const open = useCallback((slug: Project["slug"], index = 0) => {
    const project = projects.find((p) => p.slug === slug);
    if (project) setState({ project, index });
  }, []);

  return (
    <ViewerContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {state && (
          <Lightbox
            key={state.project.slug}
            project={state.project}
            index={state.index}
            onIndex={(index) => setState((s) => (s ? { ...s, index } : s))}
            onClose={() => setState(null)}
          />
        )}
      </AnimatePresence>
    </ViewerContext.Provider>
  );
}

type LightboxProps = { project: Project; index: number; onIndex: (i: number) => void; onClose: () => void };

function Lightbox({ project, index, onIndex, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const count = project.images.length;
  const image = project.images[index];
  const go = useCallback((delta: number) => onIndex((index + delta + count) % count), [count, index, onIndex]);

  // Focus, scroll lock and focus restore.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") go(1);
      else if (event.key === "ArrowLeft") go(-1);
      else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go, onClose]);

  useEffect(() => {
    thumbsRef.current
      ?.querySelector<HTMLElement>(`[data-index="${index}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="viewer-title"
      className="fixed inset-0 z-[60] flex flex-col bg-[#0b0a0a]/95 text-white backdrop-blur-sm lg:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="text-sm tabular-nums text-white/70" aria-live="polite">
            {index + 1} / {count}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={image.src}
              className="relative flex h-full w-full items-center justify-center"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="max-h-full w-auto max-w-full rounded-lg object-contain"
              />
            </motion.div>
          </AnimatePresence>
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25 sm:left-4"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25 sm:right-4"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </>
          )}
        </div>
        <p className="px-4 pt-3 text-center text-sm text-white/70 sm:px-6">{image.alt}</p>

        <div ref={thumbsRef} className="flex gap-2 overflow-x-auto px-4 py-3 sm:px-6" aria-label="All images">
          {project.images.map((thumb, i) => (
            <button
              key={thumb.src}
              type="button"
              data-index={i}
              onClick={() => onIndex(i)}
              aria-label={`Show image ${i + 1}: ${thumb.alt}`}
              aria-current={i === index ? "true" : undefined}
              className={`relative size-14 shrink-0 cursor-pointer overflow-hidden rounded-md transition ${
                i === index ? "ring-2 ring-white" : "opacity-50 hover:opacity-90"
              }`}
            >
              <Image src={thumb.src} alt="" fill sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <aside className="max-h-[38vh] shrink-0 overflow-y-auto border-t border-white/10 px-5 py-5 sm:px-6 lg:max-h-none lg:w-[22rem] lg:border-l lg:border-t-0 lg:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
          {project.client}
          {project.year && ` · ${project.year}`}
        </p>
        <h2 id="viewer-title" className="mt-3 text-2xl font-semibold leading-tight tracking-tight">
          {project.title}
        </h2>
        <p className="mt-1 text-sm text-white/60">{project.context}</p>
        {project.highlight && (
          <p className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium">{project.highlight}</p>
        )}
        <p className="mt-5 leading-relaxed text-white/80">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.deliverables.map((item) => (
            <li key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </motion.div>
  );
}
