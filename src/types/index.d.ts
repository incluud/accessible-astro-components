/**
 * Accordion item child component
 *
 * @param _props - Record<string, any>
 * @param _props.title - Title text content for the summary element
 * @param _props.name - Optional group name for exclusive accordion behavior
 * @param _props.variant - Optional style variant ('default' | 'chevron') - default: 'default'
 * @param _props.tagName - HTML tag to use for the title (h2-h6) - default: 'h3'
 * @param _props.open - Whether the accordion item is initially open - default: false
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 */
export type AccordionItem = typeof import('../../index.js').AccordionItem
export const AccordionItem: AccordionItem

/**
 * Accordion parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects one or more AccordionItem components. Parent element: `<ul>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Accordion = typeof import('../../index.js').Accordion
export const Accordion: Accordion

/**
 * Badge component
 *
 * @param _props - Record<string, any>
 * @param _props.size - Size of the badge ('small' | 'medium' | 'large') - default: 'medium'
 * @param _props.type - Type/color variant ('info' | 'success' | 'warning' | 'error' | 'default') - default: 'default'
 * @param _props.isButton - Whether to render as a button element - default: false
 * @param _props.animateOnHover - Whether to animate the icon on hover (only works with isButton) - default: false
 * @param _props.animationType - Type of animation to apply on hover ('rotate' | 'boop' | 'bounce' | 'none') - default: 'boop'
 * @param _props.animationIntensity - Animation intensity (1-10) - default: 5
 * @param _props.isCircular - Whether to display the badge as a circle - default: false
 * @param _props.isPill - Whether to display the badge with fully rounded corners (pill style) - default: false
 * @param _props.pulse - Whether to apply a pulsating animation to draw attention (pulses three times) - default: false
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<span>` or `<button>`
 */
type Badge = typeof import('../../index.js').Badge
export const Badge: Badge

/**
 * Breadcrumbs item child component
 *
 * @param _props - Record<string, any>
 * @param _props.href - `<a href={href}>` Breadcrumb route string such as "/" or "/blog" - default: "#"
 * @param _props.label - `<a>` text content for descriptive route name
 * @param _props.currentPage - Boolean: isCurrentPage?
 * @param _props.hasIcon - Whether this item has an icon - default: false
 * @param _props.class - Optional CSS class names
 */
export type BreadcrumbsItem = typeof import('../../index.js').BreadcrumbsItem
export const BreadcrumbsItem: BreadcrumbsItem

/**
 * Breadcrumbs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.ariaLabel - Accessible label for the breadcrumb navigation - default: 'Breadcrumbs'
 * @param _props.children -
 *  - Expects one or more BreadcrumbsItem components. Parent element: `<ol>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Breadcrumbs = typeof import('../../index.js').Breadcrumbs
export const Breadcrumbs: Breadcrumbs

/**
 * Card component
 *
 * @param _props - astroHTML.JSX.HTMLAttributes
 * @param _props.url - `<a href={url}>` - default: "#"
 * @param _props.img - `<img src={img}>` - default value = placeholder
 * @param _props.title - `<h3>` header > `<a>` text content
 * @param _props.footer - `<small>` text content
 * @param _props.tagName - HTML tag to use for the title - default: 'h3'
 * @param _props.class - Optional CSS class names
 * @param _props.children - textContent or any legal `<p>` tag innerHTML such as inline HTML elements. Parent element: `<p>`
 */
type Card = typeof import('../../index.js').Card
export const Card: Card

/**
 * DarkMode toggle component
 * - Toggles class `darkmode` on `document.documentElement`
 * - Sets color-scheme CSS property
 *
 * @param _props - Props object
 * @param _props.initialMode - Optional: Sets initial theme mode ('light' | 'dark' | 'auto') - default: 'auto'
 * @param _props.label - Optional: Accessible label for the toggle button - default: 'Toggle Dark Mode'
 * @param _props.class - Optional CSS class names
 * ```
 * <style>
 * :root {
 *   color-scheme: light;
 * }
 *
 * :root.darkmode {
 *   color-scheme: dark;
 * }
 * </style>
 * ```
 */
type DarkMode = typeof import('../../index.js').DarkMode
export const DarkMode: DarkMode

/**
 * Media component
 *
 * @param _props - Record<string, any>
 * @param _props.class - String of one or more CSS class names
 * @param _props.src - `<img src={src}>` - default: placeholder
 * @param _props.alt - `<img alt={alt}>` required for non-decorative images
 * @param _props.ratio - Aspect ratio of the media ('1:1' | '4:3' | '16:9' | '21:9' | 'auto') - default: 'auto'
 * @param _props.loading - Optional: loading attribute ('lazy' | 'eager') - default: 'lazy'
 * @param _props.decoding - Optional: decoding strategy ('async' | 'sync' | 'auto') - default: 'async'
 * @param _props.fetchpriority - Optional: fetch priority ('high' | 'low' | 'auto') - default: 'auto'
 */
export type Media = typeof import('../../index.js').Media
export const Media: Media

/**
 * Modal component
 *
 * @param _props - Record<string, any>
 * @param _props.triggerId - Required: ID of the button that triggers this modal
 * @param _props.title - `<h3>` header text content
 * @param _props.closeText - `<button>` text content - default: "Close"
 * @param _props.closeIcon - Whether to show close icon - default: true
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 */
type Modal = typeof import('../../index.js').Modal
export const Modal: Modal

/**
 * Global closeModal function for Modal component
 */
declare global {
  interface Window {
    closeModal: () => void
  }
}

/**
 * Notification component
 *
 * @param _props - Record<string, any>
 * @param _props.type - Specifies background color: 'info' | 'success' | 'warning' | 'error' | 'default' - default: 'default'
 * @param _props.role - Type of aria role: 'none' | 'alert' | 'log' | 'marquee' | 'status' | 'timer' | 'region' - default: 'none'
 * @param _props.ariaLive - Defines urgency of live announcements: 'off' | 'polite' | 'assertive' - default: 'off'
 * @param _props.message - Optional text message
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<aside>`
 */
type Notification = typeof import('../../index.js').Notification
export const Notification: Notification

/**
 * Pagination component
 * @type `NumericalString` `` `${number}` ``
 * @type `RouteString` `string | null | undefined`
 * @param _props - Record<string, any>
 * @param _props.firstPage - Falsy value = disabled link icon | `<a href={firstPage}>` route string such as "/" or "/blog" - default: "#"
 * @param _props.previousPage - Falsy value = disabled link icon | `<a href={previousPage}>` route string such as "/" or "/blog/5" - default: "#"
 * @param _props.nextPage - Falsy value = disabled link icon | `<a href={nextPage}>` route string such "/blog/2" - default: "#"
 * @param _props.lastPage - Falsy value = disabled link icon | `<a href={lastPage}>` route string such "/blog/20" - default: "#"
 * @param _props.currentPage - `<span>Page {currentPage} of {totalPages}</span>` - Default: '1'
 * @param _props.totalPages - `<span>Page {currentPage} of {totalPages}</span>` - Default: '12'
 * @param _props.renderProgress - Function rendering the progress. Defaults to the string "Page {currentPage} of {totalPages}"
 * @param _props.ariaLabel - Accessible label for the navigation - default: 'Pagination'
 * @param _props.firstPageLabel - Accessible label for the first page button - default: 'Go to the first page'
 * @param _props.previousPageLabel - Accessible label for the previous page button - default: 'Go to the previous page'
 * @param _props.nextPageLabel - Accessible label for the next page button - default: 'Go to the next page'
 * @param _props.lastPageLabel - Accessible label for the last page button - default: 'Go to the last page'
 * @param _props.renderPageLabel - Function to generate aria-labels for page links. Takes type ('first' | 'previous' | 'next' | 'last') and page number
 * @param _props.class - Optional CSS class names
 */
type Pagination = typeof import('../../index.js').Pagination
export const Pagination: Pagination

/**
 * Skip link component
 * - Expects either `#id=#main-content` or`<h1>` to be in document
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 */
type SkipLink = typeof import('../../index.js').SkipLink
export const SkipLink: SkipLink

/**
 * Tabs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects TabsList and TabsPanel components. Parent element: `<div>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Tabs = typeof import('../../index.js').Tabs
export const Tabs: Tabs

/**
 * TabsList component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects TabsTab components. Parent element: `<div role="tablist">`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type TabsList = typeof import('../../index.js').TabsList
export const TabsList: TabsList

/**
 * TabsTab component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the tab
 * @param _props.controls - ID of the panel this tab controls
 * @param _props.selected - Boolean indicating if this tab is selected
 * @param _props.class - Optional CSS class names
 * @param _props.children - Tab label content
 */
type TabsTab = typeof import('../../index.js').TabsTab
export const TabsTab: TabsTab

/**
 * TabsPanel component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the panel
 * @param _props.labelledby - ID of the tab that labels this panel
 * @param _props.selected - Boolean indicating if this panel is selected
 * @param _props.class - Optional CSS class names
 * @param _props.children - Panel content
 */
type TabsPanel = typeof import('../../index.js').TabsPanel
export const TabsPanel: TabsPanel

/**
 * Video component
 *
 * @param _props - Record<string, any>
 * @param _props.src - URL of the video (YouTube or direct embed)
 * @param _props.title - Accessible title for the video - default: 'YouTube video player'
 * @param _props.ratio - Aspect ratio of the video ('1:1' | '4:3' | '16:9' | '21:9') - default: '16:9'
 * @param _props.loading - Loading strategy for the iframe ('lazy' | 'eager') - default: 'lazy'
 * @param _props.class - Optional CSS class names
 */
type Video = typeof import('../../index.js').Video
export const Video: Video
