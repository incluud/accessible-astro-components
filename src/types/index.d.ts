/**
 * Accordion item child component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.title - Title text displayed in the accordion header (required)
 * @param _props.name - Optional name attribute for the details element
 * @param _props.headingLevel - Heading level for the title ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h3'
 * @param _props.headingSize - Visual size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h6'
 * @param _props.variant - Visual style variant ('default' | 'chevron') - default: 'default'
 * @param _props.open - Whether the accordion item is initially open - default: false
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note The component supports independent control of semantic level (headingLevel) and visual appearance (headingSize)
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
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Accordion = typeof import('../../index.js').Accordion
export const Accordion: Accordion

/**
 * Avatar component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.img - Image source URL for the avatar
 * @note Images are automatically optimized with loading="lazy" and decoding="async" attributes
 * @param _props.initials - Initials to display when no image is available
 * @param _props.type - Type of the avatar ('default' | 'info' | 'success' | 'warning' | 'error') - default: 'default'
 * @param _props.shape - Shape of the avatar ('round' | 'square') - default: 'round'
 * @param _props.size - Size of the avatar ('sm' | 'md' | 'lg' | string) - default: 'md'
 * @param _props.title - Primary text to display next to the avatar (e.g., name)
 * @param _props.subtitle - Secondary text to display next to the avatar (e.g., role)
 * @param _props.label - Accessible label for screen readers (required when no title is provided)
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Avatar = typeof import('../../index.js').Avatar
export const Avatar: Avatar

/**
 * AvatarGroup component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.display - Display mode for the avatar group ('condensed' | 'grid') - default: 'condensed'
 * @param _props.gridItemsSize - Size of the grid items (used for grid display mode) - default: '200px'
 * @param _props.gridGap - Gap between grid items (used for grid display mode) - default: '1rem'
 * @param _props.overlapAmount - Overlap amount for condensed mode (negative margin) - default: '-1rem'
 * @note When display is 'condensed', overlapAmount will be automatically converted to a negative value if a positive value is provided
 * @param _props.children -
 *  - Expects one or more Avatar components. Parent element: `<div>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type AvatarGroup = typeof import('../../index.js').AvatarGroup
export const AvatarGroup: AvatarGroup

/**
 * Badge component
 *
 * @param _props - Record<string, any>
 * @param _props.size - Size of the badge ('sm' | 'md' | 'lg') - default: 'md'
 * @param _props.type - Type/color variant ('info' | 'success' | 'warning' | 'error' | 'default') - default: 'default'
 * @param _props.isButton - Whether to render as a button element - default: false
 * @param _props.animateOnHover - Whether to animate the icon on hover (only works with isButton) - default: false
 * @param _props.animationType - Type of animation to apply on hover ('rotate' | 'boop' | 'bouncing' | 'nudge' | 'none') - default: 'boop'
 * @param _props.animationIntensity - Animation intensity (1-10) - default: 5
 * @param _props.isCircular - Whether to display the badge as a circle (best for single numbers/characters) - default: false
 * @param _props.isPill - Whether to display the badge with fully rounded corners (pill style) - default: false
 * @param _props.pulse - Whether to apply a pulsating animation to draw attention (pulses 3 times) - default: false
 * @param _props.srLabel - Additional text for screen readers (e.g., "New messages: " for a count badge) - default: undefined
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<span>` or `<button>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Badge = typeof import('../../index.js').Badge
export const Badge: Badge

/**
 * Button component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - The id attribute
 * @param _props.htmlType - The HTML button type attribute ('button' | 'submit' | 'reset') - default: 'button'
 * @param _props.disabled - Whether the button is disabled - default: false
 * @param _props.variant - The variant of the button ('filled' | 'outlined') - default: 'filled'
 * @param _props.type - The type of the button affecting color scheme ('default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error') - default: 'default'
 * @param _props.size - The size of the button ('sm' | 'md' | 'lg') - default: 'md'
 * @param _props.ariaLabel - The aria-label attribute
 * @param _props.ariaDescribedby - The aria-describedby attribute
 * @param _props.animateOnHover - Whether to animate the icon on hover - default: false
 * @param _props.animationType - Type of animation to apply on hover ('rotate' | 'boop' | 'bouncing' | 'nudge' | 'none') - default: 'boop'
 * @param _props.animationIntensity - Animation intensity (1-10) - default: 5
 * @param _props.pulse - Whether to apply a pulsating animation to draw attention (pulses 3 times) - default: false
 * @param _props.children - Any HTML elements. Parent element: `<button>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Button = typeof import('../../index.js').Button
export const Button: Button

/**
 * Heading component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.level - The tag name of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h2'
 * @param _props.size - The size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: same as level
 * @param _props.children - Text content or any legal heading innerHTML. Parent element: `<h1>` to `<h6>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note The component supports independent control of semantic level (level) and visual appearance (size)
 */
type Heading = typeof import('../../index.js').Heading
export const Heading: Heading

/**
 * Link component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.href - The URL to link to (required)
 * @param _props.isExternal - Whether the link is external - default: false (auto-detected for http/https URLs)
 * @param _props.isButton - Style the link as a button - default: false
 * @param _props.variant - The variant of the link when styled as button ('filled' | 'outlined') - default: 'filled'
 * @param _props.type - Type of the link when styled as button affecting color scheme ('default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'ghost') - default: 'default'
 * @param _props.size - Button size when styled as button ('sm' | 'md' | 'lg') - default: 'md'
 * @param _props.ariaLabel - The aria-label attribute
 * @param _props.title - The title attribute
 * @param _props.animateOnHover - Whether to animate the icon on hover (only when isButton is true) - default: false
 * @param _props.animationType - Type of animation to apply on hover when isButton is true ('rotate' | 'boop' | 'bouncing' | 'nudge' | 'none') - default: 'boop'
 * @param _props.animationIntensity - Animation intensity (1-10) - default: 5
 * @param _props.pulse - Whether to apply a pulsating animation to draw attention (pulses 3 times) - default: false
 * @param _props.children - Text content or any legal anchor innerHTML. Parent element: `<a>`
 * @note External links automatically display an icon and screen reader text "Opens in a new tab"
 * @note Supports custom external link icons via the "icon" named slot
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Link = typeof import('../../index.js').Link
export const Link: Link

/**
 * Breadcrumbs item child component
 *
 * @param _props - Record<string, any>
 * @param _props.href - `<a href={href}>` Breadcrumb route string such as "/" or "/blog" - default: "#"
 * @param _props.label - `<a>` text content for descriptive route name
 * @param _props.currentPage - Boolean: isCurrentPage?
 * @param _props.hasIcon - Whether this item has an icon - default: false
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Breadcrumbs = typeof import('../../index.js').Breadcrumbs
export const Breadcrumbs: Breadcrumbs

/**
 * Card component
 *
 * @param _props - astroHTML.JSX.HTMLAttributes
 * @param _props.class - Optional CSS class names
 * @param _props.title - Card's title - default: "Default title"
 * @param _props.img - URL for the card's image - default: "https://fakeimg.pl/640x360"
 * @param _props.imageComponent - Optional Astro Image component (ImageMetadata or Promise from import())
 * @param _props.imageAlt - Alt text for the image - default: ""
 * @param _props.width - Width of the image (required for remote images) - default: 640
 * @param _props.height - Height of the image (required for remote images) - default: 360
 * @param _props.inferSize - Whether to infer the image size (for remote images) - default: false
 * @param _props.url - URL for the card's link - default: "#"
 * @param _props.headingLevel - Heading level for the title ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h3'
 * @param _props.headingSize - Visual size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h6'
 * @param _props.footer - Footer content - default: ""
 * @param _props.fullHeight - Whether the card should take full height (useful for equal height card grids) - default: false
 * @param _props.children - textContent or any legal `<p>` tag innerHTML such as inline HTML elements. Parent element: `<p>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note The component supports independent control of semantic level (headingLevel) and visual appearance (headingSize)
 * @note Supports named slot "meta" for metadata content
 */
type Card = typeof import('../../index.js').Card
export const Card: Card

/**
 * Checkbox component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the checkbox field
 * @param _props.name - Name attribute for the checkbox field (required for form submission)
 * @param _props.label - Label text for the checkbox field (required)
 * @param _props.value - Value attribute for the checkbox
 * @param _props.checked - Whether the checkbox is checked by default - default: false
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.children - Not applicable for checkbox components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Uses grid layout with proper label association for accessibility
 */
type Checkbox = typeof import('../../index.js').Checkbox
export const Checkbox: Checkbox

/**
 * DarkMode toggle component
 * - Toggles class `darkmode` on `document.documentElement`
 * - Sets color-scheme CSS property
 *
 * @param _props - Props object
 * @param _props.initialMode - Optional: Sets initial theme mode ('light' | 'dark' | 'auto') - default: 'auto'
 * @param _props.label - Optional: Accessible label for the toggle button - default: 'Toggle Dark Mode'
 * @param _props.class - Optional CSS class names
 * @param _props.children - Optional: Custom elements for light/dark mode icons using named slots
 * @note Supports named slots: "light" for light mode icon and "dark" for dark mode icon
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * Fieldset component
 *
 * @param _props - Record<string, any>
 * @param _props.name - Name attribute for the fieldset (used for group validation) - required
 * @param _props.id - Unique identifier for the fieldset
 * @param _props.legend - Legend text for the fieldset (required)
 * @param _props.required - Whether the fieldset group is required (at least one selection) - default: false
 * @param _props.data-validation - Error message to display when group validation fails
 * @param _props.class - Optional CSS class names
 * @param _props.variant - Variant of the fieldset ('default' | 'minimal') - default: 'default'
 * @param _props.children - Form controls to group together. Parent element: `<fieldset>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Provides group-level validation for checkbox and radio button groups
 * @note Automatically generates validation messages if not provided
 */
type Fieldset = typeof import('../../index.js').Fieldset
export const Fieldset: Fieldset

/**
 * Form component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.action - Form action URL
 * @param _props.name - Form name attribute
 * @param _props.method - HTTP method for form submission ('get' | 'post') - default: 'post'
 * @param _props.enctype - Encoding type for form data ('application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain') - default: 'application/x-www-form-urlencoded'
 * @param _props.target - Target for form submission ('_self' | '_blank' | '_parent' | '_top') - default: '_self'
 * @param _props.autocomplete - Autocomplete behavior ('on' | 'off') - default: 'on'
 * @param _props.children - Form controls and content. Parent element: `<form>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Includes built-in progressive enhancement validation with error handling
 * @note Features accessibility-first error summary and inline validation messages
 * @note Supports custom validation patterns and functions
 */
type Form = typeof import('../../index.js').Form
export const Form: Form

/**
 * Input component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the input field
 * @param _props.name - Name attribute for the input field (required for form submission)
 * @param _props.label - Label text for the input field (required)
 * @param _props.data-validation - Optional custom error message to override automatically generated validation messages
 * @param _props.type - Input type determining built-in validation rules ('text' | 'email' | 'password' | 'tel' | 'url') - default: 'text'
 * @param _props.required - Whether the field is required - default: false
 * @param _props.data-validation-pattern - Custom validation pattern (regex)
 * @param _props.data-validation-fn - Custom validation function name (must be available on window)
 * @param _props.value - Default value for the input field
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.readonly - Whether the field is readonly - default: false
 * @param _props.autocomplete - Autocomplete attribute value - default: 'on'
 * @param _props.children - Not applicable for input components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Progressive enhancement with built-in validation and accessibility features
 * @note Automatically generates validation messages based on input type; use data-validation to provide custom messages
 * @note Supports custom validation patterns and functions
 */
type Input = typeof import('../../index.js').Input
export const Input: Input

/**
 * Media component
 *
 * @param _props - Record<string, any>
 * @param _props.class - String of one or more CSS class names
 * @param _props.src - `<img src={src}>` - default: placeholder
 * @param _props.alt - `<img alt={alt}>` required for non-decorative images
 * @param _props.ratio - Aspect ratio of the media ('1:1' | '4:3' | '16:9' | '21:9' | 'auto') - default: 'auto'
 * @param _props.loading - Image loading strategy ('lazy' | 'eager') - default: 'lazy'
 * @param _props.decoding - Image decoding strategy ('async' | 'sync' | 'auto') - default: 'async'
 * @param _props.fetchpriority - Optional: fetch priority ('high' | 'low' | 'auto') - default: 'auto'
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
export type Media = typeof import('../../index.js').Media
export const Media: Media

/**
 * Modal component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.title - Modal title (required)
 * @param _props.triggerId - ID of the trigger element (required)
 * @param _props.closeText - Close button text - default: "Close"
 * @param _props.closeIcon - Whether to show close icon - default: true
 * @param _props.headingSize - Visual size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h4'
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Modal title uses semantic h3 level with customizable visual appearance (headingSize)
 * @note Features full accessibility with focus management and keyboard interactions
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
 * @param _props.element - Semantic element to use: 'div' | 'aside' - default: 'div'
 * @param _props.role - Type of aria role: 'none' | 'alert' | 'log' | 'marquee' | 'status' | 'timer' | 'region' - default: 'none'
 * @param _props.message - Optional text message
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<div>` or `<aside>` based on element prop
 * @note Use 'div' for system feedback, 'aside' for educational/supplementary content
 * @note 'status' role implies aria-live="polite", 'alert' role implies aria-live="assertive"
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Pagination = typeof import('../../index.js').Pagination
export const Pagination: Pagination

/**
 * Radio component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the radio button field
 * @param _props.name - Name attribute for the radio button field (shared within group) - required
 * @param _props.label - Label text for the radio button field (required)
 * @param _props.value - Value attribute for the radio button (required for radio groups)
 * @param _props.checked - Whether the radio button is checked by default - default: false
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.children - Not applicable for radio components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Uses grid layout with proper label association for accessibility
 * @note Radio buttons with the same name attribute form a group
 */
type Radio = typeof import('../../index.js').Radio
export const Radio: Radio

/**
 * Skip link component
 * - Expects either `#id=#main-content` or`<h1>` to be in document
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * @note Additional HTML attributes can be passed and will be spread to the root element
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
 * @param _props.loading - Iframe loading strategy ('lazy' | 'eager') - default: 'lazy'
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Video = typeof import('../../index.js').Video
export const Video: Video

/**
 * Textarea component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the textarea field
 * @param _props.name - Name attribute for the textarea field (required for form submission)
 * @param _props.label - Label text for the textarea field (required)
 * @param _props.data-validation - Error message to display when validation fails
 * @param _props.required - Whether the field is required - default: false
 * @param _props.data-validation-pattern - Custom validation pattern (regex)
 * @param _props.data-validation-fn - Custom validation function name (must be available on window)
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.readonly - Whether the field is readonly - default: false
 * @param _props.autocomplete - Autocomplete attribute value - default: 'on'
 * @param _props.rows - Number of visible text lines
 * @param _props.cols - Number of visible text columns
 * @param _props.placeholder - Placeholder text
 * @param _props.children - Not applicable for textarea components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Progressive enhancement with built-in validation and accessibility features
 * @note Automatically generates validation messages if not provided
 * @note Features vertical resize and minimum height styling
 */
type Textarea = typeof import('../../index.js').Textarea
export const Textarea: Textarea
