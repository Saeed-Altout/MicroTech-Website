"use client";

import { useEffect, useState, useTransition } from "react";
import { FaUser } from "react-icons/fa";
import { LogOut, Mail, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { logout } from "@/actions/logout";
import { toast } from "sonner";
import { auth } from "@/actions/auth";
import { Button } from "../ui/button";
import { LoginButton } from "./login-button";

export const UserButton = () => {
  const [isLoading, startTransition] = useTransition();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onClick = async () => {
    startTransition(() => {
      logout().then((data) => {
        if (data?.error) {
          toast.error(data?.error);
        }
        if (data?.success) {
          toast.success(data?.success);
          window.location.reload();
        }
      });
    });
  };
  const getUser = async () => {
    startTransition(() => {
      auth().then((data) => {
        setUsername(data?.username?.value || "");
        setEmail(data?.email?.value || "");
        setIsLoggedIn(data?.isLoggedIn || false);
      });
    });
  };

  useEffect(() => {
    getUser();
    setIsMounted(true);
  }, [username, email]);

  if (!isMounted) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <LoginButton asChild mode="modal">
        <Button size="sm">Login</Button>
      </LoginButton>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/" />
          <AvatarFallback className="bg-primary">
            <FaUser className="text-background h-3 w-3" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled={isLoading}>
          <User className="h-4 w-4 mr-2" />
          {username}
        </DropdownMenuItem>
        <DropdownMenuItem disabled={isLoading}>
          <Mail className="h-4 w-4 mr-2" />
          {email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={isLoading}
          onClick={onClick}
          className="cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
