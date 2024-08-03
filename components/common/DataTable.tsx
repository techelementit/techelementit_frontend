import { useParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LucideAlertCircle,
  LucideGripVertical,
  LucideMoreVertical,
  LucidePenSquare,
  LucideTrash2,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Message from "./Message";
import { useAppContext } from "@/context";

interface IDataTableProps {
  actionButtons: string;
  hiddenHeader: string;
  columns: any;
  data: any;
  lang: string;
  deleteHandler: (id: string) => void;
  updateHandler: (id: string) => void;
  viewDetailsHandler: (id: string) => void;
}

const DataTable: FC<IDataTableProps> = ({
  actionButtons,
  hiddenHeader,
  columns,
  data = [],
  lang,
  deleteHandler,
  updateHandler,
  viewDetailsHandler,
}) => {
  const { sidebarOpen } = useAppContext();
  const [confirm, setConfirm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [pastePrevent, setPastePrevent] = useState(false);
  const handlePaste = (event: any) => {
    event.preventDefault();
    setPastePrevent(true);
    if (event.ctrlKey && (event.key === "v" || event.key === "V")) {
      event.preventDefault();
      setPastePrevent(true);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      setTimeout(() => setShowError(true), 3000);
    } else {
      setShowError(false);
    }
  }, [data, showError]);

  return (
    <div className="mt-4 flex flex-col">
      <div>
        <div className="inline-block min-w-full align-middle">
          {data?.length > 0 && (
            <div className="overflow-hidden border-2 rounded-xl">
              <table className="min-w-full divide-y-2 divide-accent">
                <thead>
                  <tr>
                    {columns?.length > 0 &&
                      columns.map((column: any, index: number) => (
                        <th
                          key={index}
                          scope="col"
                          className={`py-2 px-3 text-left text-sm md:text-lg lg:heading-tertairy font-semibold text-foreground bg-accent/20 ${
                            hiddenHeader.includes(column.accessorKey) &&
                            "hidden lg:table-cell"
                          }`}
                        >
                          {column.header}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-accent">
                  {data?.length > 0 &&
                    data.map((items: any, indexItems: number) => (
                      <tr key={indexItems}>
                        {columns.length > 0 &&
                          columns.map((column: any, indexItem: number) => (
                            <td
                              key={indexItem}
                              className={`w-full sm:max-w-none max-w-0  sm:w-auto whitespace-nowrap truncate px-3 py-2 text-sm text-foreground  ${
                                hiddenHeader.includes(column.accessorKey) &&
                                "hidden lg:table-cell"
                              } ${
                                sidebarOpen &&
                                column.accessorKey === "action" &&
                                " !w-[50px] text-center"
                              }`}
                            >
                              {column.accessorKey === "action" ? (
                                <div className="w-full md:max-w-[120px] lg:max-w-[160px] xl:max-w-[120px] 3xl:max-w-[120px] text-center">
                                  {/* ACTION BUTTON COLLECTIONS FOR SMALL SCREEN */}
                                  <div
                                    className={`block ${
                                      sidebarOpen || "md:hidden"
                                    }`}
                                  >
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button
                                          variant="ghost"
                                          className="h-8 w-8 p-0"
                                        >
                                          <span className="sr-only">
                                            Open action menu
                                          </span>
                                          <LucideMoreVertical className="h-5 w-5" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuLabel
                                          className={
                                            lang === "en"
                                              ? "font-poppins"
                                              : "font-anek"
                                          }
                                        >
                                          {lang === "en"
                                            ? "Actions"
                                            : "কার্যকলাপ"}
                                        </DropdownMenuLabel>
                                        {actionButtons.includes("details") && (
                                          <DropdownMenuItem
                                            onClick={() =>
                                              viewDetailsHandler(items._id)
                                            }
                                            className={
                                              lang === "en"
                                                ? "font-poppins"
                                                : "font-anek"
                                            }
                                          >
                                            <LucideAlertCircle className="w-4 h-4 opacity-80 mr-1" />
                                            {lang === "en"
                                              ? "Details"
                                              : "বিস্তারিত"}
                                          </DropdownMenuItem>
                                        )}

                                        {actionButtons.includes("edit") && (
                                          <DropdownMenuItem
                                            onClick={() =>
                                              updateHandler(items._id)
                                            }
                                            className={
                                              lang === "en"
                                                ? "font-poppins"
                                                : "font-anek"
                                            }
                                          >
                                            <LucidePenSquare className="w-4 h-4 opacity-80 mr-1" />
                                            {lang === "en"
                                              ? "Edit"
                                              : "সম্পাদনা"}
                                          </DropdownMenuItem>
                                        )}
                                        {actionButtons.includes("delete") && (
                                          <>
                                            <DropdownMenuSeparator />

                                            <AlertDialog>
                                              <AlertDialogTrigger
                                                className={`${
                                                  lang === "en"
                                                    ? "font-poppins"
                                                    : "font-anek"
                                                } flex items-center pl-1.5 bg-destructive text-destructive-foreground hover:bg-destructive/80 w-full h-full py-1 rounded-sm`}
                                              >
                                                <LucideTrash2 className="w-4 h-4 opacity-80 mr-1" />
                                                {lang === "en"
                                                  ? "Delete"
                                                  : "মুছুন"}
                                              </AlertDialogTrigger>
                                              <AlertDialogContent>
                                                <AlertDialogHeader>
                                                  <AlertDialogTitle
                                                    className={`${
                                                      lang === "en"
                                                        ? "font-poppins"
                                                        : "font-anek"
                                                    }`}
                                                  >
                                                    {lang === "en"
                                                      ? "  Are you absolutely sure?"
                                                      : "আপনি কি পুরোপুরিভাবে নিশ্চিত ?"}
                                                  </AlertDialogTitle>
                                                  <AlertDialogDescription
                                                    className={`${
                                                      lang === "en"
                                                        ? "font-poppins"
                                                        : "font-anek"
                                                    }`}
                                                  >
                                                    {lang === "en"
                                                      ? "This action cannot be undone. This will permanently delete your storage"
                                                      : "এই কাজটি পুনরায় করা যাবে না। এটি স্থায়ীভাবে আপনার সঞ্চয়স্থান থেকে মুছে ফেলবে।"}
                                                  </AlertDialogDescription>

                                                  <div>
                                                    <div className="w-full my-2">
                                                      <label
                                                        htmlFor="deleteConfirm"
                                                        className={`input-label ${
                                                          lang === "en"
                                                            ? "font-poppins"
                                                            : "font-anek"
                                                        }`}
                                                      >
                                                        {lang === "en" ? (
                                                          <span>
                                                            Write
                                                            <strong className="font-semibold text-destructive px-2 select-none">
                                                              delete
                                                            </strong>
                                                            for confirmation
                                                          </span>
                                                        ) : (
                                                          <span>
                                                            <strong className="font-semibold text-destructive px-2 text-lg select-none">
                                                              delete
                                                            </strong>
                                                            শব্দটি লিখুন নিশ্চিত
                                                            হওয়ার জন্য
                                                          </span>
                                                        )}
                                                      </label>
                                                      <input
                                                        autoComplete="off"
                                                        onPaste={handlePaste}
                                                        type="text"
                                                        name="deleteConfirm"
                                                        onChange={(e: any) => {
                                                          if (
                                                            e.target.value ===
                                                            "delete"
                                                          ) {
                                                            setPastePrevent(
                                                              false
                                                            );
                                                            return setConfirm(
                                                              true
                                                            );
                                                          } else {
                                                            setPastePrevent(
                                                              false
                                                            );
                                                            return setConfirm(
                                                              false
                                                            );
                                                          }
                                                        }}
                                                        id="deleteConfirm"
                                                        placeholder={`${
                                                          lang === "en"
                                                            ? "Write the given word for confirmation"
                                                            : "নিশ্চিত হওয়ার জন্য উল্লেখ্যিত ওয়ার্ডটি লিখুন"
                                                        }`}
                                                        className={`input-field ${
                                                          lang === "en"
                                                            ? "font-poppins"
                                                            : "font-anek"
                                                        }`}
                                                      />
                                                      {confirm ||
                                                        (pastePrevent && (
                                                          <span className="input-error">
                                                            {confirm &&
                                                              "Did't match with the given instruction"}
                                                            {pastePrevent &&
                                                              "Pasting is not allowed!"}
                                                          </span>
                                                        ))}
                                                    </div>
                                                  </div>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                  <AlertDialogCancel
                                                    onClick={() =>
                                                      setConfirm(false)
                                                    }
                                                    className={` ${
                                                      lang === "en"
                                                        ? "font-poppins"
                                                        : "font-anek"
                                                    }`}
                                                  >
                                                    {lang === "en"
                                                      ? "Cancel"
                                                      : "বাতিল করুন"}
                                                  </AlertDialogCancel>
                                                  <AlertDialogAction
                                                    disabled={
                                                      !confirm || pastePrevent
                                                    }
                                                    className={`btn-destructive-fill ${
                                                      lang === "en"
                                                        ? "font-poppins"
                                                        : "font-anek"
                                                    }`}
                                                    onClick={() => {
                                                      deleteHandler(items._id);
                                                      setConfirm(false);
                                                    }}
                                                  >
                                                    {lang === "en"
                                                      ? "Confirm"
                                                      : "নিশ্চিত করুন"}
                                                  </AlertDialogAction>
                                                </AlertDialogFooter>
                                              </AlertDialogContent>
                                            </AlertDialog>
                                          </>
                                        )}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                  {/* ACTION BUTTON COLLECTIONS FOR LARGE SCREEN */}
                                  <div
                                    className={` hidden ${
                                      sidebarOpen && "md:hidden"
                                    } md:flex items-center gap-x-4`}
                                  >
                                    {actionButtons.includes("details") && (
                                      <Button
                                        onClick={() =>
                                          viewDetailsHandler(items._id)
                                        }
                                        size="rounded"
                                      >
                                        {lang === "en"
                                          ? "Details"
                                          : "বিস্তারিত"}
                                      </Button>
                                    )}
                                    {actionButtons.includes("edit") && (
                                      <Button
                                        size="rounded"
                                        onClick={() => updateHandler(items._id)}
                                      >
                                        {lang === "en" ? "Edit" : "সম্পাদনা"}
                                      </Button>
                                    )}
                                    {actionButtons.includes("delete") && (
                                      <AlertDialog>
                                        <AlertDialogTrigger
                                          className={`${
                                            lang === "en"
                                              ? "font-poppins"
                                              : "font-anek"
                                          } btn-destructive-fill-rounded`}
                                        >
                                          {lang === "en" ? "Delete" : "মুছুন"}
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                          <AlertDialogHeader>
                                            <AlertDialogTitle
                                              className={`${
                                                lang === "en"
                                                  ? "font-poppins"
                                                  : "font-anek"
                                              }`}
                                            >
                                              {lang === "en"
                                                ? "  Are you absolutely sure?"
                                                : "আপনি কি পুরোপুরিভাবে নিশ্চিত ?"}
                                            </AlertDialogTitle>
                                            <AlertDialogDescription
                                              className={`${
                                                lang === "en"
                                                  ? "font-poppins"
                                                  : "font-anek"
                                              }`}
                                            >
                                              {lang === "en"
                                                ? "This action cannot be undone. This will permanently delete your storage"
                                                : "এই কাজটি পুনরায় করা যাবে না। এটি স্থায়ীভাবে আপনার সঞ্চয়স্থান থেকে মুছে ফেলবে।"}
                                            </AlertDialogDescription>

                                            <div>
                                              <div className="w-full my-2">
                                                <label
                                                  htmlFor="deleteConfirm"
                                                  className={`input-label ${
                                                    lang === "en"
                                                      ? "font-poppins"
                                                      : "font-anek"
                                                  }`}
                                                >
                                                  {lang === "en" ? (
                                                    <span>
                                                      Write
                                                      <strong className="font-semibold text-destructive px-2 select-none">
                                                        delete
                                                      </strong>
                                                      for confirmation
                                                    </span>
                                                  ) : (
                                                    <span>
                                                      <strong className="font-semibold text-destructive px-2 text-lg select-none dark:">
                                                        delete
                                                      </strong>
                                                      শব্দটি লিখুন নিশ্চিত হওয়ার
                                                      জন্য
                                                    </span>
                                                  )}
                                                </label>
                                                <input
                                                  autoComplete="off"
                                                  onPaste={handlePaste}
                                                  type="text"
                                                  name="deleteConfirm"
                                                  onChange={(e: any) => {
                                                    if (
                                                      e.target.value ===
                                                      "delete"
                                                    ) {
                                                      setPastePrevent(false);
                                                      return setConfirm(true);
                                                    } else {
                                                      setPastePrevent(false);
                                                      return setConfirm(false);
                                                    }
                                                  }}
                                                  id="deleteConfirm"
                                                  placeholder={`${
                                                    lang === "en"
                                                      ? "Write the given word for confirmation"
                                                      : "নিশ্চিত হওয়ার জন্য উল্লেখ্যিত ওয়ার্ডটি লিখুন"
                                                  }`}
                                                  className={`input-field ${
                                                    lang === "en"
                                                      ? "font-poppins"
                                                      : "font-anek"
                                                  }`}
                                                />
                                                {confirm ||
                                                  (pastePrevent && (
                                                    <span className="input-error">
                                                      {confirm &&
                                                        "Did't match with the given instruction"}
                                                      {pastePrevent &&
                                                        "Pasting is not allowed!"}
                                                    </span>
                                                  ))}
                                              </div>
                                            </div>
                                          </AlertDialogHeader>
                                          <AlertDialogFooter>
                                            <AlertDialogCancel
                                              onClick={() => setConfirm(false)}
                                              className={` ${
                                                lang === "en"
                                                  ? "font-poppins"
                                                  : "font-anek"
                                              }`}
                                            >
                                              {lang === "en"
                                                ? "Cancel"
                                                : "বাতিল করুন"}
                                            </AlertDialogCancel>
                                            <AlertDialogAction
                                              disabled={
                                                !confirm || pastePrevent
                                              }
                                              className={`btn-destructive-fill ${
                                                lang === "en"
                                                  ? "font-poppins"
                                                  : "font-anek"
                                              }`}
                                              onClick={() => {
                                                deleteHandler(items._id);
                                                setConfirm(false);
                                              }}
                                            >
                                              {lang === "en"
                                                ? "Confirm"
                                                : "নিশ্চিত করুন"}
                                            </AlertDialogAction>
                                          </AlertDialogFooter>
                                        </AlertDialogContent>
                                      </AlertDialog>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {Object.keys(items[column?.accessorKey])
                                    ?.length > 0 &&
                                  typeof items[column?.accessorKey] !== "string"
                                    ? items[column?.accessorKey][lang]
                                    : items[column?.accessorKey]}
                                  {indexItem === 0 && (
                                    <dl className="block lg:hidden">
                                      {hiddenHeader.split(",").length > 0 &&
                                        hiddenHeader
                                          .split(",")
                                          .map(
                                            (hiddenItem: any, hiddenIndex) => (
                                              <span
                                                key={hiddenIndex}
                                                className={`block sm:max-w-none sm:w-auto whitespace-nowrap truncate`}
                                              >
                                                <dt className="inline sr-only">
                                                  {hiddenItem.trim()}:{" "}
                                                </dt>
                                                <dd
                                                  className={`inline truncate w-full`}
                                                >
                                                  {items[hiddenItem.trim()]}
                                                </dd>
                                              </span>
                                            )
                                          )}
                                    </dl>
                                  )}
                                </>
                              )}
                            </td>
                          ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showError && (
        <div className="flex flex-col items-center">
          <Message
            message={
              lang === "en"
                ? "Data not found, Please try again!"
                : "তথ্য পাওয়া যায়নি, আবার চেষ্টা করুন"
            }
          />
          <Button
            onClick={() => {
              window.location.reload();
            }}
            variant="ghost"
            size="rounded"
            className="block mt-6"
          >
            {lang === "en" ? "Try Again" : "আবার চেষ্টা করুন"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
