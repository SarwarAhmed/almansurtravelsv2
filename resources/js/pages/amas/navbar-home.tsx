import { Link as InertiaLink, router, usePage } from '@inertiajs/react'; // If not using Inertia, 'replace' with your router's Link
import { ChevronDown, LogOut, Menu, Moon, Settings, Sun, User } from 'lucide-react';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

import TextLink from '@/components/text-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { logout } from '@/routes';
import type { SharedData } from '@/types';

// -------------------------------------------------------------
// Responsive Navbar for Laravel + Inertia + React + shadcn/ui
// - Sticky, glassy top bar
// - Desktop nav + mobile Sheet menu
// - Simple theme toggler (no next-themes needed)
// - Works without Next.js
// -------------------------------------------------------------

// If you don't use Inertia, you can change InertiaLink to <a> or your router's Link.
const Link = InertiaLink;

export type NavItem = { label: string; href: string; external?: boolean };

interface NavbarProps {
    logo?: React.ReactNode; // text or <img/>
    navItems?: NavItem[];
    cta?: { label: string; href: string };
    user?: { name: string; email?: string; avatarUrl?: string } | null;
}

// Simple theme toggler that toggles the `dark` class on <html>
function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const stored = localStorage.getItem('theme:dark');
        const initialDark = stored ? stored === 'true' : prefersDark;
        root.classList.toggle('dark', initialDark);
        setIsDark(initialDark);
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        const root = document.documentElement;
        root.classList.toggle('dark', next);
        localStorage.setItem('theme:dark', String(next));
    };

    return (
        <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
    );
}

export default function NavbarHome({
    // auth,
    logo = (
        <div className="font-semibold tracking-tight">
            <Link href={'/'}>
                <div className="space-y-0">
                    <div className="text-2xl font-bold text-indigo-400 dark:text-gray-400">AL-MANSUR</div>
                    <div className="text-xs leading-tight">Al-Mansur Air Service Ltd.</div>
                </div>
            </Link>
        </div>
    ),
    navItems = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Hajj', href: '/hajj' },
        { label: 'Umrah', href: '/umrah' },
    ],
    cta = { label: 'Get Started', href: '/register' },
    user = null,
}: NavbarProps) {
    const [open, setOpen] = useState(false);

    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    const isActive = (href: string) => {
        try {
            const u = new URL(href, window.location.origin);
            return pathname === u.pathname || pathname.startsWith(u.pathname + '/');
        } catch {
            return pathname === href || pathname.startsWith(href + '/');
        }
    };

    const page = usePage<SharedData>();
    const { auth } = page.props;
    user = auth?.user;

    const initials = useMemo(
        () =>
            user?.name
                ? user.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')
                : 'U',
        [user],
    );

    // logout function
    const cleanup = useMobileNavigation();
    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
                {/* Mobile menu trigger */}
                <div className="flex items-center md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[280px] p-0">
                            <div className="px-4 pt-4 pb-2">{logo}</div>
                            <Separator />
                            <nav className="grid gap-1 p-2">
                                {navItems.map((item) => (
                                    <SheetClose asChild key={item.href}>
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`rounded-xl px-3 py-2 text-sm hover:bg-accent ${isActive(item.href) ? 'bg-accent' : ''}`}
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`rounded-xl px-3 py-2 text-sm hover:bg-accent ${isActive(item.href) ? 'bg-accent' : ''}`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </SheetClose>
                                ))}
                            </nav>
                            <div className="p-2">
                                <SheetClose asChild>
                                    {cta ? (
                                        <Link href={cta.href}>
                                            <Button className="w-full">{cta.label}</Button>
                                        </Link>
                                    ) : null}
                                </SheetClose>
                            </div>
                            <div className="mt-auto flex items-center justify-between gap-2 border-t p-3">
                                <ThemeToggle />
                                {user ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="gap-2">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                                                    <AvatarFallback>{initials}</AvatarFallback>
                                                </Avatar>
                                                <span className="truncate text-sm">{user.name}</span>
                                                <ChevronDown className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-56">
                                            <DropdownMenuLabel className="truncate">{user.name}</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                                <a href="/account" className="flex w-full items-center">
                                                    <User className="mr-2 h-4 w-4" /> Account
                                                </a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={'/settings'} className="flex w-full items-center">
                                                    <Settings className="mr-2 h-4 w-4" /> Settings
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                                <form method="post" action="/logout" className="w-full">
                                                    <button type="submit" className="flex w-full items-center">
                                                        <LogOut className="mr-2 h-4 w-4" /> Log out
                                                    </button>
                                                </form>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <TextLink href="{login}">
                                            <Button variant="outline" className="w-full">
                                                Log in
                                            </Button>
                                        </TextLink>
                                    </div>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <div className="flex min-w-0 items-center gap-2 md:gap-3">{logo}</div>

                {/* Desktop nav */}
                <nav className="ml-auto hidden items-center gap-1 md:flex">
                    {navItems.map((item) =>
                        item.external ? (
                            <a
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                                    isActive(item.href) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                                }`}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                                    isActive(item.href) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ),
                    )}
                </nav>

                {/* Right side (desktop) */}
                <div className="ml-2 hidden items-center gap-2 md:flex">
                    <ThemeToggle />
                    {/*{cta ? (*/}
                    {/*    <Link href={cta.href}>*/}
                    {/*        <Button className="rounded-2xl">{cta.label}</Button>*/}
                    {/*    </Link>*/}
                    {/*) : null}*/}
                    <Separator orientation="vertical" className="mx-1 h-6" />
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="gap-2">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                                        <AvatarFallback>{initials}</AvatarFallback>
                                    </Avatar>
                                    <span className="max-w-[140px] truncate text-sm">{user.name}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="truncate">{user.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <a href="/account" className="flex w-full items-center">
                                        <User className="mr-2 h-4 w-4" /> Account
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={'/settings'} className="flex w-full items-center">
                                        <Settings className="mr-2 h-4 w-4" /> Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={logout()} as="button" className="w-full" onClick={handleLogout}>
                                        <div className="flex w-full items-center">
                                            <LogOut className="mr-2 h-4 w-4" /> Log out
                                        </div>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link href="/login">
                                <div>
                                    {cta ? (
                                        <Link href={cta.href}>
                                            <Button className="w-full">{cta.label}</Button>
                                        </Link>
                                    ) : null}
                                </div>
                            </Link>
                            {/*<Link href="/register">*/}
                            {/*    <Button>Sign up</Button>*/}
                            {/*</Link>*/}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

// --------------------------- Usage Notes ---------------------------
// 1) Ensure shadcn/ui is installed and Tailwind is configured.
// 2) Place <Navbar/> in your Inertia layout component, e.g. resources/js/Layouts/AppLayout.tsx.
// 3) If you aren't using Inertia, replace `Link` with your router's Link or <a> tag.
// 4) ThemeToggle stores preference in localStorage and toggles the `dark` class on <html>.
// 5) Pass `user` prop from your server-side shared data to show the profile dropdown.
