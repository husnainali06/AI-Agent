import { useState } from "react";
import ReactMarkdown from "react-markdown";

import {
  FiCopy,
  FiCheck,
  FiUser,
} from "react-icons/fi";

import { FaRobot } from "react-icons/fa";

export default function ChatMessage({ message }) {

  const [copied, setCopied] = useState(false);

  const isUser = message.role === "user";

  const copyText = async () => {

    await navigator.clipboard.writeText(message.text);

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 1500);

  };

return (

  <div className="w-full py-6">

    {/* AI MESSAGE */}

    {!isUser && (

      <div className="group flex justify-start">

        <div className="w-full max-w-full">

          <div
            className="
            prose
            prose-invert
            max-w-none

            prose-headings:text-white
            prose-p:text-gray-200
            prose-strong:text-white
            prose-code:text-green-400

            prose-pre:bg-[#111827]
            prose-pre:border
            prose-pre:border-gray-700
            prose-pre:rounded-xl

            prose-li:text-gray-200

            leading-8
            text-[16px]
            "
          >

            <ReactMarkdown>
              {message.text}
            </ReactMarkdown>

          </div>

          <button
            onClick={copyText}
            className="
            opacity-0
            group-hover:opacity-100
            mt-3
            p-2
            rounded-lg
            hover:bg-white/10
            transition
            "
          >

            {copied ? (
              <FiCheck
                size={17}
                className="text-green-400"
              />
            ) : (
              <FiCopy
                size={17}
                className="text-gray-400"
              />
            )}

          </button>

        </div>

      </div>

    )}

    {/* USER MESSAGE */}

    {isUser && (

      <div className="flex justify-end">

        <div
          className="
          max-w-[75%]
          rounded-3xl
          rounded-br-lg
          bg-[#2f2f2f]
          px-5
          py-4
          text-white
          "
        >

          <p className="whitespace-pre-wrap break-words leading-8 text-[16px]">

            {message.text}

          </p>

        </div>

      </div>

    )}

  </div>

);

}