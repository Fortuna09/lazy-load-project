# Lazyload - project

![Preview of the demo](/PREVIEW.gif)

This small project demonstrates a simple JavaScript lazy-loading technique for images.

What is lazy loading?

Lazy loading is a web performance technique that delays loading resources (like images) until they are actually needed — for example, when they appear in the user's viewport. This reduces initial page load time and bandwidth usage, improving perceived performance.

What this project shows

- The page uses an IntersectionObserver-based lazy loader to wait until images are near the viewport, then requests a higher-resolution version (by adding or replacing the `w` query parameter with `w=1000`).
- A lightweight placeholder/spinner is shown while the image downloads to give visual feedback.
- The goal is to demonstrate practical front-end skills: DOM manipulation, browser APIs (IntersectionObserver), progressive enhancement, and simple performance-minded image handling.

How to use

Open `index.html` in a local server (or with a quick static server) and scroll the page: images will request the higher-resolution `w=1000` version as they approach the viewport.

Purpose

This repository is a minimal demo you can use to show you understand lazy-loading, sensible defaults for loading images, and small performance improvements useful in real projects.

