import { useChatHandler } from "@/components/chat/chat-hooks/use-chat-handler"
import { ChatbotUIContext } from "@/context/context"
import { IconInfoCircle, IconMessagePlus } from "@tabler/icons-react"
import { FC, useContext } from "react"
import { WithTooltip } from "../ui/with-tooltip"

interface ChatSecondaryButtonsProps {}

export const ChatSecondaryButtons: FC<ChatSecondaryButtonsProps> = ({}) => {
  const { selectedChat } = useContext(ChatbotUIContext)

  const { handleNewChat } = useChatHandler()

  return (
    <>
      {selectedChat && (
        <>
          <WithTooltip
            delayDuration={200}
            display={
              <div>
                <div className="text-xl font-bold">Chat Info</div>

                <div className="mt-2 space-y-2">
                  <div>Modelo: {selectedChat.model}</div>
                  <div>Prompt: {selectedChat.prompt}</div>

                  <div>Temperatura: {selectedChat.temperature}</div>
                  <div>Tamanho do Contexto: {selectedChat.context_length}</div>

                  <div>
                    Contexto de Perfil:{" "}
                    {selectedChat.include_profile_context
                      ? "Enabled"
                      : "Disabled"}
                  </div>
                  <div>
                    {" "}
                    Instruções do Workspace:{" "}
                    {selectedChat.include_workspace_instructions
                      ? "Enabled"
                      : "Disabled"}
                  </div>

                  {/* <div>
                    Embeddings Provider: {selectedChat.embeddings_provider}
                  </div> */}
                </div>
              </div>
            }
            trigger={
              <div className="mt-1">
                <IconInfoCircle
                  className="cursor-default hover:opacity-50"
                  size={24}
                />
              </div>
            }
          />

          <WithTooltip
            delayDuration={200}
            display={<div>Iniciar novo chat</div>}
            trigger={
              <div className="mt-1">
                <IconMessagePlus
                  className="cursor-pointer hover:opacity-50"
                  size={24}
                  onClick={handleNewChat}
                />
              </div>
            }
          />
        </>
      )}

      {/* TODO */}
      {/* <ShareMenu item={selectedChat} contentType="chats" /> */}
    </>
  )
}
