import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Logo from "./Logo";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-transparent flex flex-col w-full ${
        isSticky ? "fixed z-[9999] transition" : ""
      }`}
    >
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="bg-transparent py-1 px-8 max-lg:px-1 max-sm:px-2 max-sm:pl-0 flex justify-between [&>header]:!max-w-full"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden "
        />
        <NavbarBrand
          className="flex items-center cursor-pointer"
          onClick={() => {
            setIsMenuOpen(false), router.push("/");
          }}
        >
          <Logo />
        </NavbarBrand>
        <NavbarContent className="md:hidden hidden lg:flex gap-14" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.id}>
              <div className="text-base text-[#8AAAE5] hover:text-[#344d7d] cursor-pointer">
                <a href={`#${item.id}`}>{item.label}</a>
              </div>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {/* <Button
              onClick={() => open()}
              className="font-semibold flex text-white rounded-[100px] px-8 max-sm:px-4 max-sm:py-2 py-6 text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(145, 173, 186, 0.8) -11.36%, rgba(32, 81, 102, 0.096) 104.55%)",
                border: "1px solid #FFFFFF",
              }}
            >
              Order Now
            </Button> */}
          </NavbarItem>
        </NavbarContent>
        {isMenuOpen && (
          <NavbarMenu className="py-10 px-8">
            {menuItems.map((item) => (
              <NavbarMenuItem key={item.id}>
                <div className="flex flex-col gap-1">
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl text-[#8AAAE5] mb-6 hover:text-[#344d7d] cursor-pointer"
                  >
                    <a href={`#${item.id}`}>{item.label}</a>
                  </div>
                </div>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
      </Navbar>
    </div>
  );
}
