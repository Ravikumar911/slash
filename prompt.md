### Updated Prompt for **Slash Features Website**

**Objective:**  
Build a **read-only, one-page website** that showcases the features of **Slash** in a visually engaging and interactive manner. The website will use a **widget-based layout** with no scrolling on larger screens, inspired by the shared image. Each widget will explain a unique feature of the platform, and clicking on a widget will reveal more details about the feature in a modal or overlay. The site will focus on responsiveness, ensuring widgets stack vertically on mobile.

---

### **Prompt**

"Create a **read-only, one-page website** for **Slash**, an innovative e-commerce platform. The website should use **CSS Grids** to display multiple **interactive widgets** in a modular layout inspired by the provided image. The website's purpose is to explain the features of Slash, particularly **group buying with friends** and its factory outlet replacement concept. Here's the detailed breakdown:

---

### **Design Requirements**

1. **Layout:**
   - **No Scrolling** on large screens:
     - Use a **CSS Grid layout** to display widgets in a fixed grid structure, ensuring all widgets fit into one screen for high-resolution monitors.
   - **Responsive Design**:
     - On smaller screens (e.g., mobile), stack widgets vertically while maintaining consistent spacing.
   - Maintain a **clean and modern design** that feels premium and professional.

2. **Widget Functionality:**
   - Each widget will represent a key feature (e.g., Group Buying, Discounts, Personalization, Brand Storytelling).
   - **Interaction**:
     - Clicking on a widget will open a modal or overlay to provide more details about the feature.
     - Include a close button to return to the main layout.

3. **Features to Highlight**:
   - **Group Buying with Friends**:
     - Explain how users can form groups (e.g., “Buy 3 Get 4 Free”) and split the cost.
     - Highlight the ability to split products (e.g., dresses) after purchase.
   - **Exclusive Weekly Deals**:
     - Focus on a single product per week with massive discounts.
   - **Premium Brand Storytelling**:
     - Showcase how Slash promotes brands through storytelling and immersive content.
   - **Savings Visualizer**:
     - Illustrate the savings users achieve through group shopping.
   - **AI-Powered Personalization**:
     - Explain how AI recommends the best products for users.
   - **Seamless Shopping Experience**:
     - Highlight simplicity and convenience as core pillars of the platform.

4. **Interactive Design:**
   - Use **Magic UI Components** for engaging visuals:
     - **Animated Gradient Text**, **Confetti**, **Interactive Icon Cloud**, **Orbiting Circles**, etc.
   - Use **Shadcn UI** for clean, consistent structure:
     - Cards, buttons, modals, and typography.

---

### **Technical Implementation**

1. **Tech Stack:**
   - **Frontend**: React with Next.js (for modular and responsive components).
   - **Styling**: Tailwind CSS for grid layouts and responsive design.
   - **Components**:
     - Use **CSS Grids** for layout.
     - **Magic UI** for interactivity and animations.
     - **Shadcn UI** for structured components like cards, buttons, and modals.

2. **Grid Layout**:
   - Use a **12-column CSS grid** to arrange widgets in a modular fashion.
   - Example grid setup:
     - **Desktop**: 3 rows × 4 columns with widgets fitting evenly.
     - **Mobile**: 1 column with widgets stacking vertically.

3. **Widget Functionality**:
   - Each widget will:
     - Display an **icon** or **image** representing the feature.
     - Include a **short, catchy description** (e.g., "Group Buying Made Easy").
     - Open a **modal** or **overlay** with more details when clicked.

4. **Responsive Design**:
   - Use Tailwind’s responsive utilities (e.g., `grid-cols-1`, `lg:grid-cols-4`) to ensure the layout adapts to different screen sizes.

---

### **Example Features and Widgets**

1. **Group Buying with Friends**
   - **Widget Text:** “Shop Together, Save More!”
   - **Modal Content:** Explain how users can team up with friends for deals like "Buy 3, Get 4 Free" and split costs or products.

2. **Exclusive Weekly Deals**
   - **Widget Text:** “One Amazing Deal, Every Week.”
   - **Modal Content:** Describe the weekly product focus with unbeatable discounts.

3. **Premium Storytelling**
   - **Widget Text:** “Discover the Story Behind the Brand.”
   - **Modal Content:** Highlight how Slash creates immersive brand stories.

4. **AI-Powered Personalization**
   - **Widget Text:** “Products You’ll Love, Chosen for You.”
   - **Modal Content:** Explain how AI recommends products based on user preferences.

5. **Savings Visualizer**
   - **Widget Text:** “See How Much You Save.”
   - **Modal Content:** Show dynamic savings charts and progress bars.

---

### **Key Components and Commands**

#### Install Required Components:
```bash
# Magic UI Components
npx shadcn@latest add "https://magicui.design/r/animated-gradient-text"
npx shadcn@latest add "https://magicui.design/r/confetti"
npx shadcn@latest add "https://magicui.design/r/interactive-icon-cloud"
npx shadcn@latest add "https://magicui.design/r/orbiting-circles"

# Shadcn UI Components
npx shadcn@latest add card button modal 
```

---

### **Expected Output**

1. **Large Screens:**
   - A **static grid layout** with 8-12 widgets, each clickable to reveal more details.
   - No scrolling required.
2. **Mobile Screens:**
   - A **vertical stack** of widgets with consistent spacing and responsive modals.
3. **Interactive Features:**
   - Clicking a widget opens a **smooth, animated modal** with more information.
   - Use **Magic UI animations** like confetti for celebratory effects (e.g., savings achieved).

---

This prompt ensures the website is simple yet engaging, showcasing Slash’s features in a way that appeals to investors and potential users alike. Let me know if you’d like adjustments or if we should move on to specific widgets!"