"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const categories = ["All moments", "Before & after", "Cleaning ritual", "The essentials"] as const;

type Category = (typeof categories)[number];

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: Exclude<Category, "All moments">;
  shape?: "feature";
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/beforeafter.jpeg",
    alt: "A muddy white sneaker beside its freshly cleaned match",
    title: "The comeback",
    description: "A little care goes a long way.",
    category: "Before & after",
    shape: "feature",
  },
  {
    src: "/images/foarmcleaner.jpeg",
    alt: "Shooz Buddy foam cleaner and brush arranged with a white sneaker",
    title: "Fresh foam, fresh start",
    description: "The everyday clean, made simple.",
    category: "Cleaning ritual",
  },
  {
    src: "/images/foarmshoecleaner.png",
    alt: "Shooz Buddy cleaning kit photographed against a dark background",
    title: "The full setup",
    description: "Everything your rotation needs.",
    category: "The essentials",
  },
  {
    src: "/images/shoescleaningsolutions.png",
    alt: "Shooz Buddy shoe cleaning solution and brush outdoors",
    title: "Ready when you are",
    description: "A quick refresh, wherever you are.",
    category: "Cleaning ritual",
  },
  {
    src: "/images/completepremiumcleaningkit.jpeg",
    alt: "The Shooz Buddy premium cleaning kit laid out on a bright surface",
    title: "Meet your clean team",
    description: "Foam, brush, and microfiber. Sorted.",
    category: "The essentials",
  },
  {
    src: "/images/foarmcleaner1.jpeg",
    alt: "Shooz Buddy shoe cleaner and brush on a sunlit table",
    title: "Little ritual, big difference",
    description: "Keep the pairs you love in rotation.",
    category: "Cleaning ritual",
  },
];

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "gallery-arrowLeft" : undefined}
      fill="none"
      viewBox="0 0 24 24">
      <path
        d="M4.5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All moments");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const visibleItems =
    activeCategory === "All moments"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!selectedItem) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <div className="gallery-page">
      <section className="gallery-hero" aria-labelledby="gallery-title" id="gallery">
        <div className="gallery-heroGlow" aria-hidden="true" />
        <div className="gallery-heroInner">
          <div className="gallery-heroCopy">
            <p className="gallery-eyebrow">
              <span className="gallery-eyebrowDot" />
              The Shooz Buddy gallery
            </p>
            <h1 id="gallery-title">
              Good shoes.
              <br />
              <span>Better stories.</span>
            </h1>
            <p className="gallery-heroDescription">
              Little rituals, satisfying comebacks, and the kit that makes it all happen. Take a
              look around.
            </p>
            <a className="gallery-heroLink" href="#gallery-grid">
              Explore the gallery <ArrowIcon />
            </a>
          </div>

          <div className="gallery-heroVisual">
            <div className="gallery-heroImage">
              <Image
                src="/images/beforeafter.jpeg"
                alt="The Shooz Buddy foam cleaner beside a dirty and freshly cleaned sneaker"
                fill
                sizes="(max-width: 760px) 90vw, 48vw"
                loading="eager"
                className="gallery-heroPhoto"
              />
            </div>
            <div className="gallery-floatingNote">
              <span className="gallery-noteIcon" aria-hidden="true">
                ✳
              </span>
              <span>
                <strong>Love your pairs</strong>
                <small>Wear them on repeat.</small>
              </span>
            </div>
            <span className="gallery-heroIndex" aria-hidden="true">
              SB — 01
            </span>
          </div>
        </div>
        <div className="gallery-heroFooter" aria-hidden="true">
          <span>CARE IN EVERY DETAIL</span>
          <span className="gallery-footerRule" />
          <span>MADE FOR THE LONG RUN</span>
        </div>
      </section>

      <section className="gallery-collection" aria-labelledby="collection-title">
        <div className="gallery-collectionHeader">
          <div>
            <p className="gallery-sectionEyebrow">A little inspiration</p>
            <h2 id="collection-title">The good stuff.</h2>
          </div>
          <p className="gallery-collectionIntro">
            From first clean to favourite pair again.
            <br className="gallery-desktopBreak" /> Here’s a peek at the Shooz Buddy way.
          </p>
        </div>

        <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`gallery-filterButton ${
                activeCategory === category ? "gallery-filterActive" : ""
              }`}
              aria-pressed={activeCategory === category}>
              {category}
              {category === "All moments" && (
                <span className="gallery-filterCount">{galleryItems.length}</span>
              )}
            </button>
          ))}
        </div>

        <div className="gallery-grid" id="gallery-grid" aria-live="polite">
          {visibleItems.map((item, index) => (
            <article
              className={`gallery-card ${item.shape === "feature" ? "gallery-cardFeature" : ""}`}
              key={item.src}
              style={{ animationDelay: `${index * 75}ms` }}>
              <button
                type="button"
                className="gallery-cardButton"
                onClick={() => setSelectedItem(item)}
                aria-label={`View ${item.title}: ${item.alt}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  className="gallery-cardImage"
                />
                <span className="gallery-cardShade" />
                <span className="gallery-cardTopline">
                  <span className="gallery-cardCategory">{item.category}</span>
                  <span className="gallery-viewIcon" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </span>
                <span className="gallery-cardCaption">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </span>
              </button>
            </article>
          ))}
        </div>

        <div className="gallery-bottomNote">
          <span className="gallery-bottomSpark" aria-hidden="true">
            ✳
          </span>
          <p>Good things happen when you give your favourites a little love.</p>
          <Link href="/#products" className="gallery-shopLink">
            Find your clean kit <ArrowIcon />
          </Link>
        </div>
      </section>

      {selectedItem && (
        <div className="gallery-lightbox" role="presentation" onClick={() => setSelectedItem(null)}>
          <div
            className="gallery-lightboxPanel"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-closeButton"
              onClick={() => setSelectedItem(null)}
              aria-label="Close image viewer">
              <span aria-hidden="true">×</span>
            </button>
            <div className="gallery-lightboxImage">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="(max-width: 760px) 92vw, 80vw"
                className="gallery-lightboxPhoto"
              />
            </div>
            <div className="gallery-lightboxCaption">
              <div>
                <span>{selectedItem.category}</span>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
              <button
                type="button"
                className="gallery-nextButton"
                onClick={() => {
                  const currentIndex = visibleItems.indexOf(selectedItem);
                  setSelectedItem(visibleItems[(currentIndex + 1) % visibleItems.length]);
                }}
                aria-label="View next image">
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
