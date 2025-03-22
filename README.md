# Section Navigation Components

This directory contains reusable components for navigating to different sections across the website with smooth scrolling.

## ScrollToSection

A generic component that handles navigation to any section on any page.

### Usage

```jsx
import ScrollToSection from "@/components/UI/ScrollToSection";

// Basic usage with sessionStorage approach
<ScrollToSection
  targetPage="/about"
  sectionId="team"
  className="your-custom-classes"
>
  Our Team
</ScrollToSection>

// Using hash navigation in URL
<ScrollToSection
  targetPage="/events"
  sectionId="workshops"
  className="text-blue-500"
  useHashInUrl={true}
>
  Workshops
</ScrollToSection>

// With additional onClick handler
<ScrollToSection
  targetPage="/events"
  sectionId="workshops"
  className="text-blue-500"
  onClick={() => console.log('Workshops link clicked')}
>
  Workshops
</ScrollToSection>
```

### Props

| Prop         | Type     | Default   | Description                                                         |
| ------------ | -------- | --------- | ------------------------------------------------------------------- |
| targetPage   | string   | Required  | The page to navigate to (e.g., "/", "/events")                      |
| sectionId    | string   | Required  | The ID of the section to scroll to                                  |
| className    | string   | ""        | CSS classes to apply to the link                                    |
| onClick      | function | undefined | Additional click handler                                            |
| useHashInUrl | boolean  | false     | Whether to use hash navigation (#) in URL instead of sessionStorage |

## ScrollToContact

A specialized component that navigates to the contact section on the homepage.

### Usage

```jsx
import ScrollToContact from "@/components/UI/ScrollToContact";

// Basic usage
<ScrollToContact className="your-custom-classes">
  Contact Us
</ScrollToContact>

// With custom element and styling
<ScrollToContact className="text-blue-500 hover:underline">
  <div className="flex items-center gap-2">
    <Phone size={16} />
    <span>Get in touch</span>
  </div>
</ScrollToContact>

// With additional onClick handler
<ScrollToContact
  className="text-blue-500"
  onClick={() => console.log('Contact link clicked')}
>
  Contact Us
</ScrollToContact>
```

## ScrollToEvent

A specialized component that navigates to specific event sections on the events page.

### Usage

```jsx
import ScrollToEvent from "@/components/UI/ScrollToEvent";

// Navigate to technical events section
<ScrollToEvent eventType="tech" className="hover:underline">
  Technical Events
</ScrollToEvent>

// Navigate to technical individual events section
<ScrollToEvent eventType="tech-ind" className="text-blue-500">
  Technical Individual Events
</ScrollToEvent>

// Navigate to non-technical events section
<ScrollToEvent eventType="non-tech" className="hover:text-blue-600">
  Non-Technical Events
</ScrollToEvent>
```

## ScrollToTimeline

A specialized component that navigates to the timeline section on the homepage.

### Usage

```jsx
import ScrollToTimeline from "@/components/UI/ScrollToTimeline";

// Basic usage
<ScrollToTimeline className="your-custom-classes">
  View Timeline
</ScrollToTimeline>

// With custom styling
<ScrollToTimeline className="text-blue-500 hover:underline">
  <div className="flex items-center gap-2">
    <Calendar size={16} />
    <span>Event Timeline</span>
  </div>
</ScrollToTimeline>

// With additional onClick handler
<ScrollToTimeline
  className="text-blue-500"
  onClick={() => console.log('Timeline clicked')}
>
  Timeline
</ScrollToTimeline>
```

## ContactButton

A pre-styled button component for contacting, built on top of ScrollToContact.

### Usage

```jsx
import ContactButton from "@/components/UI/ContactButton";

// Default usage (primary blue button with icon)
<ContactButton />

// Secondary style
<ContactButton variant="secondary" />

// Text only style
<ContactButton variant="text" />

// Custom label
<ContactButton label="Get in Touch" />

// Without icon
<ContactButton showIcon={false} />

// With custom classes (using Tailwind)
<ContactButton className="mt-4 w-full" />
```

## Integration with Header & Footer

The navigation components can be easily integrated into your site's header and footer:

```jsx
// In Header.tsx
import ScrollToEvent from "@/components/UI/ScrollToEvent";
import ScrollToTimeline from "@/components/UI/ScrollToTimeline";

// Create a navigation item renderer
const renderNavItem = (item) => {
  if (item.navType === "event") {
    return (
      <ScrollToEvent eventType={item.eventType} className="your-nav-classes">
        {item.name}
      </ScrollToEvent>
    );
  } else if (item.navType === "timeline") {
    return (
      <ScrollToTimeline className="your-nav-classes">
        {item.name}
      </ScrollToTimeline>
    );
  }

  // Regular links...
};
```

## How It Works

These components provide two different approaches to section navigation:

1. **SessionStorage approach** (default, useHashInUrl=false):

   - Stores the target section ID in sessionStorage
   - Navigates to the target page
   - The target page's useEffect hook detects the stored section and scrolls to it

2. **Hash navigation approach** (useHashInUrl=true):
   - Appends the section ID as a hash fragment to the URL (e.g., /events#tech)
   - For same-page navigation, directly updates window.location.hash
   - Relies on the browser's native hash change behavior and the page's hash change handlers

Choose the appropriate approach based on how the target page handles section navigation.

## Same-Page Navigation

These components handle several navigation scenarios:

1. **Different page to target section**: Navigates to the new page and then scrolls
2. **Same page, different section**: Directly updates window.location.hash which:
   - Updates the URL
   - Triggers native hash change handling
   - Falls back to manual scrolling if needed
3. **Already at the section**: No action needed

## Troubleshooting

If you encounter issues with section navigation:

### Common Issues

1. **First navigation works, but subsequent ones don't**:

   - This typically happens when the page has its own hash change handler
   - Solution: Use the EventNavTester's "Direct Navigation" buttons which use window.location.hash directly

2. **Can't find the section**:

   - Check if section IDs match exactly (case-sensitive)
   - Verify that sections are not dynamically added after initial load
   - Try increasing the retry attempts in ScrollToSection.tsx

3. **No smooth scrolling**:
   - Try adjusting the headerOffset value in ScrollToSection.tsx
   - Check if the page has CSS that might interfere with scroll behavior

### Debugging

The components include debugging console logs that can help identify issues:

- "ScrollToEvent component mounted for X section" - Confirms the component mounted
- "Found X section in the DOM" - Confirms the section exists
- "Warning: X section does not exist in the DOM yet" - Indicates the section might be dynamically loaded
- "Navigating to event section: X" - Triggered when a link is clicked
- "Current path:" and "Current hash:" - Shows the current URL information

## Testing

The `EventNavTester` component provides a simple way to test and verify the navigation functionality:

```jsx
import EventNavTester from "@/components/UI/EventNavTester";

// Add this component to any page to test navigation
<EventNavTester />;
```

This component offers two navigation methods:

1. **Component Navigation**: Uses the ScrollToEvent components
2. **Direct Navigation**: Uses window.location.hash directly as a fallback method

It also displays the current hash to help with debugging.
