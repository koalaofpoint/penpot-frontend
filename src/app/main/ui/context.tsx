// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as Ctx from "app/main/ui/context"

export const RenderIdContext = React.createContext<string | null>(null)
export const CurrentRouteContext = React.createContext<any>(null)
export const CurrentProfileContext = React.createContext<any>(null)
export const CurrentTeamIdContext = React.createContext<string | null>(null)
export const CurrentProjectIdContext = React.createContext<string | null>(null)
export const CurrentPageIdContext = React.createContext<string | null>(null)
export const CurrentFileIdContext = React.createContext<string | null>(null)
export const CurrentVboxContext = React.createContext<any>(null)
export const CurrentSvgRootIdContext = React.createContext<string | null>(null)

export const ActiveFramesContext = React.createContext<any>(null)
export const RenderThumbnailsContext = React.createContext<any>(null)

export const LibrariesContext = React.createContext<any>(null)
export const DesignTokensContext = React.createContext<any>(null)
export const TokenInputsContext = React.createContext<any>(null)

export const CurrentScrollContext = React.createContext<any>(null)
export const CurrentZoomContext = React.createContext<any>(null)

export const WorkspaceReadOnlyContext = React.createContext<boolean>(false)
export const IsRenderContext = React.createContext<boolean>(false)
export const IsComponentContext = React.createContext<boolean>(false)

export type SidebarPosition = ":right" | ":left" | null
export const SidebarContext = React.createContext<SidebarPosition>(null)

export const PermissionsContext = React.createContext<any>(null)
export const CanEditContext = React.createContext<boolean | null>(null)

export const ActiveTokensByTypeContext = React.createContext<any>(null)

export {
  Ctx
}