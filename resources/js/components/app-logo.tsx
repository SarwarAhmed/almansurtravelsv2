import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex xaspect-square size-8 items-center justify-center rounded-md dark:bg-black bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 w-full fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">AL-MANSUR AIR SERVICE</span>
            </div>
        </>
    );
}
