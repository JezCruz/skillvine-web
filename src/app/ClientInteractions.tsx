"use client";

import { useEffect } from "react";

export default function ClientInteractions() {
  useEffect(() => {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    const closeMobileMenu = () => {
      navLinks?.classList.remove("active");
      menuToggle?.classList.remove("open");
    };

    const openPopup = (tabId: string) => {
      closeMobileMenu();
      document.getElementById(tabId)?.classList.add("show");
    };

    const closeAllPopups = () => {
      document.querySelectorAll(".tab-popup.show").forEach((popup) => {
        popup.classList.remove("show");
      });
    };

    const aboutLink = document.getElementById("about-link");
    const servicesLink = document.getElementById("services-link");
    const contactLink = document.getElementById("contact-link");
    const heroBtn = document.querySelector(".hero-btn");
    const features = document.querySelector(".features");

    const handleAbout = (e: Event) => {
      e.preventDefault();
      openPopup("about-tab");
    };

    const handleServices = (e: Event) => {
      e.preventDefault();
      openPopup("services-tab");
    };

    const handleContact = (e: Event) => {
      e.preventDefault();
      openPopup("contact-tab");
    };

    const handleHeroClick = (e: Event) => {
      e.preventDefault();
      features?.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    };

    const handleCloseClick = (e: Event) => {
      const target = e.target as HTMLElement;
      target.closest(".tab-popup")?.classList.remove("show");
    };

    const handleOverlayClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("tab-popup")) {
        target.classList.remove("show");
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAllPopups();
    };

    const handleMenu = (e: Event) => {
      e.stopPropagation();
      navLinks?.classList.toggle("active");
      menuToggle?.classList.toggle("open");
    };

    aboutLink?.addEventListener("click", handleAbout);
    servicesLink?.addEventListener("click", handleServices);
    contactLink?.addEventListener("click", handleContact);
    heroBtn?.addEventListener("click", handleHeroClick);
    menuToggle?.addEventListener("click", handleMenu);

    document.querySelectorAll(".close-tab").forEach((btn) => {
      btn.addEventListener("click", handleCloseClick);
    });

    window.addEventListener("click", handleOverlayClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      aboutLink?.removeEventListener("click", handleAbout);
      servicesLink?.removeEventListener("click", handleServices);
      contactLink?.removeEventListener("click", handleContact);
      heroBtn?.removeEventListener("click", handleHeroClick);
      menuToggle?.removeEventListener("click", handleMenu);
      window.removeEventListener("click", handleOverlayClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return null;
}