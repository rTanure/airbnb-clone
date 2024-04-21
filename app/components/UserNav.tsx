import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border p-2 lg:px-4 lg:py-2 flex items-center gap-3">
          <MenuIcon className="size-6 lg:size-5" />

          <img 
            className="rounded-full size-8 hidden lg:block"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" 
            alt="Image of the user profile" 
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem>
          <RegisterLink>
            Register
          </RegisterLink>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LoginLink>
            Login
          </LoginLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}