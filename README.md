#  Collaborative Text Editor

A **real-time, Google Docs-like** collaborative text editor built with modern web technologies. Multiple users can edit documents simultaneously with live cursors, rich text formatting, version history, and more.

##  Demo

🌐 Live app: [collaborative-text-editor-roan.vercel.app](https://collaborative-text-editor-roan.vercel.app)

> Note: You can sign in and start editing or invite collaborators for live sessions.

---

##  Features

✅ **Real-time collaboration** with WebSocket-powered sync  
✅ **Live cursors** to track collaborators' presence  
✅ **Rich text formatting** (bold, italic, underline, strike, headings, lists, code blocks, etc.)  
✅ **Font family and font size** customization  
✅ **Undo / Redo** functionality  
✅ **User presence indicators** (avatars, names, mentions)  
✅ **Commenting support** (inline annotations)  
✅ **Responsive design**  
✅ **Authentication** via Clerk  
✅ **Cloud document storage**  
✅ **Version history**  
✅ **Print-friendly and shareable documents**  
✅ **Optimized for production with Vercel**

---

##  Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TailwindCSS  
- **Editor Engine**: TipTap (ProseMirror-based)  
- **Real-time Sync**: Liveblocks  
- **Auth**: Clerk  
- **Database & Collaboration Backend**: Convex  
- **Icons**: Lucide  
- **Deployment**: Vercel

---

##  Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/collaborative-text-editor.git
cd collaborative-text-editor
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Setup environment variables
Create a .env.local file in the root with the following:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=https://your-convex-instance.convex.cloud
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key

```


### 4. Run the development server
```bash
npm run dev

```

## Contribution

Contributions are welcome!

Fork the repo

Create a new branch: git checkout -b feature-name

Make your changes

Push: git push origin feature-name

Open a Pull Request


## Acknowledgements

TipTap – Editor framework

Liveblocks – Real-time collaboration

Clerk – Auth provider

Convex – Backend data management

Vercel – Deployment



