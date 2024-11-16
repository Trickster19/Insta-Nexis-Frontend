"use client";

import {
    MenuIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";


interface NavbarProps {
    isCollapsed: boolean;
    onResetWidth: () => void;
}
export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {

    return (
        <>
            <nav
                className={cn(
                    "bg-background dark:bg-[#1F1F1F] px-3 py-1.5 bg-neutral-100 w-full flex items-center justify-between",
                    !isCollapsed && "hidden xl:flex"
                )}
            >
                <div className="flex items-center gap-x-4">
                    {isCollapsed && (
                        <div className="flex">
                            <MenuIcon
                                role="button"
                                onClick={onResetWidth}
                                className="h-6 w-6 mt-2 text-muted-foreground"
                            />
                        </div>
                    )}
                </div>
                <div className="items-center gap-x-2">
                    <div className="flex gap-x-2">

                        {/* <HoverCard>
              <HoverCardTrigger>
                <Item label="" rounded={true} icon={BellRing} />
              </HoverCardTrigger>
              <HoverCardContent
                className="mr-16 p-2 max-h-52 w-96 grid gap-1  dark:bg-secondary overflow-auto"
                align="center"
                side="bottom"
              >
                {[1, 2, 3, 4, 5, 6].map((ele, idx, arr) => {
                  return (
                    <>
                      <div
                        key={idx}
                        className="flex justify-between items-center hover:dark:bg-[#1f1f1f] hover:bg-gray-200 rounded-sm py-2 px-3"
                      >
                        <Avatar>
                          <AvatarFallback className="bg-green-600">
                            VC
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <h4 className="text-sm flex items-center font-semibold text-green-400">
                            <SquareUserRound className="h-4 w-4 mr-1" />
                            <span className="font-semibold">
                              Satwik Agrawal
                            </span>
                          </h4>
                          <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem obcaecati incidunt consequuntur
                            laudantium eum aliquid ex veniam tempora natus est.
                          </p>
                          <div className="mt-1 grid grid-cols-4 gap-4">
                            <div></div>
                            <div></div>
                            <Button className="text-xs h-6">Reply</Button>
                            <Button className="text-xs h-6">Reply</Button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </HoverCardContent>
            </HoverCard> */}

                    </div>
                </div>
            </nav>
        </>
    );
};
