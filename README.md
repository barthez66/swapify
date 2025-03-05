# Swapify 🔄

![Swapify Banner](/placeholder.svg?height=300&width=800&text=Swapify+Marketplace)

Swapify is a modern clothing marketplace platform that exclusively uses Bitcoin for payments. Built with Next.js 14, Tailwind CSS, and Supabase, it provides a seamless experience for buying and selling second-hand clothing.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fswapify)

## ✨ Features

- **🔐 User Authentication** - Secure sign-up, login, and profile management
- **📦 Product Listings** - Browse, search, and filter products by category
- **💬 Messaging System** - Real-time chat between buyers and sellers
- **💰 Offer Negotiation** - Make and respond to price offers
- **₿ Bitcoin Payments** - Secure transactions using Bitcoin
- **📱 Responsive Design** - Optimized for all devices
- **🔍 Advanced Search** - Find products by keyword, category, size, etc.
- **⭐ User Ratings** - Build trust with user reviews and ratings

## 🖼️ Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="/placeholder.svg?height=200&width=400&text=Homepage" alt="Homepage" width="400"/>
  <img src="/placeholder.svg?height=200&width=400&text=Product+Page" alt="Product Page" width="400"/>
  <img src="/placeholder.svg?height=200&width=400&text=Messages" alt="Messages" width="400"/>
  <img src="/placeholder.svg?height=200&width=400&text=Bitcoin+Payment" alt="Bitcoin Payment" width="400"/>
</div>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- [Supabase](https://supabase.com) account

### Installation

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/yourusername/swapify.git
cd swapify
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Set up environment variables**

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

4. **Run the development server**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. **Initialize the database**

Visit `http://localhost:3000/api/init-db` in your browser to set up the database tables and seed initial data.

6. **Open the application**

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📊 Database Schema

The application uses the following database tables:

| Table | Description |
|-------|-------------|
| **users** | User profiles (managed by Supabase Auth) |
| **products** | Product listings with details and images |
| **categories** | Product categories hierarchy |
| **conversations** | Messaging conversations between users |
| **messages** | Individual messages within conversations |
| **offers** | Price offers made by buyers to sellers |
| **transactions** | Bitcoin payment transactions |

## 🔒 Authentication

Swapify uses Supabase Authentication for secure user management:

- Email and password authentication
- Profile management
- Session handling
- Protected routes

## ₿ Bitcoin Integration

The application includes comprehensive Bitcoin payment features:

- Connect multiple wallet types
- QR code generation for payments
- Real-time transaction status tracking
- Bitcoin price conversion using current exchange rates
- Transaction history and receipts

## 🧩 Project Structure

\`\`\`
swapify/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── product/          # Product pages
│   ├── messages/         # Messaging pages
│   ├── offers/           # Offers pages
│   └── ...               # Other pages
├── components/           # React components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── lib/                  # Utility functions
│   ├── actions/          # Server actions
│   ├── supabase.ts       # Supabase client
│   └── ...               # Other utilities
├── public/               # Static assets
└── ...                   # Config files
\`\`\`

## 🛠️ Development

### Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Adding New Features

1. Create components in the `components/` directory
2. Add server actions in the `lib/actions/` directory
3. Create new pages in the `app/` directory
4. Update database schema if necessary

## 🐛 Troubleshooting

### Common Issues

- **Database initialization fails**: Make sure your Supabase credentials are correct and you have the necessary permissions.
- **Authentication issues**: Check that your Supabase project has email authentication enabled.
- **Images not loading**: Ensure you're using the correct path for images.

### Getting Help

If you encounter any issues, please:

1. Check the [Supabase documentation](https://supabase.com/docs)
2. Check the [Next.js documentation](https://nextjs.org/docs)
3. Open an issue in the GitHub repository

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

