import { ContentType } from "@/types"
import { FC } from "react"
import { Input } from "../ui/input"
import { TranslateContentType } from "./sidebar-data-list"

interface SidebarSearchProps {
  contentType: ContentType
  searchTerm: string
  setSearchTerm: Function
}

export const SidebarSearch: FC<SidebarSearchProps> = ({
  contentType,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <Input
      placeholder={`Pesquisar ${TranslateContentType(contentType)}...`}
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}
