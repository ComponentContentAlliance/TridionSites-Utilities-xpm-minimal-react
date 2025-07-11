
import axios from "axios"
import {  HeadlessXpmProvider } from "headless-xpm-react";

import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables"
import { TYPED_COMPONENT_QUERY } from "./typedCompnentQuery";
import { useEffect, useState } from "react"
import type { IComponentProps } from "./types";

import CardComponent from "./components/CardComponent";

const App = () => {
  const [componentData, setCompnentData] = useState<IComponentProps | null>(null)
  useEffect(() => {
    getComponentData()
  }, [])

  const getComponentData = async () => {
    const typedComponentQuery = {
      query: TYPED_COMPONENT_QUERY,
      variables: TYPED_COMPONENT_QUERY_VARIABLES
    }
    const response = await axios.post(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL, typedComponentQuery)
    if(response.data.data.typedComponent!==null){
      setCompnentData(response.data.data.typedComponent)
    }
  }

  return (
    <HeadlessXpmProvider editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL} showExpSpaceEditor={true} showPageEditorLink={true}>
      <div className="flex items-center justify-center h-screen w-lg m-auto">
        <CardComponent componentData={componentData as IComponentProps} />
      </div>
    </HeadlessXpmProvider>
  )
}

export default App