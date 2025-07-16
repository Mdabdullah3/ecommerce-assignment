import { Auth } from '@/types';
import { Link } from '@inertiajs/react';
import { Heart, ShoppingCart, UserIcon } from 'lucide-react';
const Navbar = ({ auth }: { auth: Auth }) => {
    return (
        <nav className="nav-blur fixed w-full z-50 border-b border-taupe/20 backdrop-blur-md bg-white/60">
            <div className="max-w-7xl mx-auto px-6 uppercase">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="font-display text-xl text-slate">
                        ETHE<span className="text-orange-500">REAL</span>
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        {["Collections", "Craftsmanship", "Journal", "Contact"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm  tracking-wider text-slate hover:text-accent transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/wishlist" className="hover:text-primary">
                            <Heart className="w-5 h-5" />
                        </Link>
                        <Link href="/cart" className="hover:text-primary relative">
                            <ShoppingCart className="w-5 h-5" />
                            {/* Example badge */}
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
                        </Link>
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="hover:text-primary"
                            >
                                <UserIcon className="w-5 h-5" />
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm hover:text-primary">
                                    Login
                                </Link>
                                <Link href={route('register')} className="text-sm hover:text-primary">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;