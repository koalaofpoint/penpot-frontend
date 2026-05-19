// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as log from "app.common.logging"
import * as wasm from "app.render-wasm.wasm"
import * as dom from "app.util.dom"

export function getWebGLContext(): WebGLRenderingContext | null {
  if (!wasm.contextInitialized) return null

  const glObj = (wasm.internalModule as any).GL
  if (!glObj) return null

  const currentCtx = (glObj as any).currentContext
  if (!currentCtx) return null

  return (currentCtx as any).GLctx
}

export function createWebGLTextureFromImage(gl: WebGLRenderingContext, imageElement: any): any {
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageElement)
  gl.bindTexture(gl.TEXTURE_2D, null)
  return texture
}

function drawImageDataToWebGL(gl: WebGLRenderingContext, imageData: ImageData): void {
  const width = imageData.width
  const height = imageData.height
  const texture = gl.createTexture()

  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageData)

  gl.viewport(0, 0, width, height)

  const vertexShaderSource = `#version 300 es
in vec2 a_position;
in vec2 a_texCoord;
out vec2 v_texCoord;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}`

  const fragmentShaderSource = `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
out vec4 fragColor;
void main() {
  fragColor = texture(u_texture, v_texCoord);
}`

  const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
  const program = gl.createProgram()!

  gl.shaderSource(vertexShader, vertexShaderSource)
  gl.compileShader(vertexShader)
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    log.error("Vertex shader compilation failed", {
      log: gl.getShaderInfoLog(vertexShader),
    })
  }

  gl.shaderSource(fragmentShader, fragmentShaderSource)
  gl.compileShader(fragmentShader)
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    log.error("Fragment shader compilation failed", {
      log: gl.getShaderInfoLog(fragmentShader),
    })
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.useProgram(program)

    const positionLocation = gl.getAttribLocation(program, "a_position")
    const texcoordLocation = gl.getAttribLocation(program, "a_texCoord")
    const positionBuffer = gl.createBuffer()
    const texcoordBuffer = gl.createBuffer()
    const positions = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0])
    const texcoords = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0])

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, texcoords, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(texcoordLocation)
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0)

    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, texture)
    const textureLocation = gl.getUniformLocation(program, "u_texture")
    gl.uniform1i(textureLocation, 0)

    gl.drawArrays(gl.TRIANGLES, 0, 6)

    gl.deleteBuffer(positionBuffer)
    gl.deleteBuffer(texcoordBuffer)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    gl.deleteProgram(program)
  } else {
    log.error("Program linking failed", {
      log: gl.getProgramInfoLog(program),
    })
  }

  gl.bindTexture(gl.TEXTURE_2D, null)
  gl.deleteTexture(texture)
}

export function restorePreviousCanvasPixels(): void {
  const previousCanvasPixels = wasm.canvasPixels
  if (!previousCanvasPixels) return

  const gl = wasm.glContext
  if (!gl) return

  drawImageDataToWebGL(gl, previousCanvasPixels)
  wasm.canvasPixels = null
}

export function clearCanvasPixels(): void {
  if (!wasm.canvas) return

  const context = wasm.glContext
  context.clearColor(0, 0, 0, 0.0)
  context.clear(context.COLOR_BUFFER_BIT)
  context.clear(context.DEPTH_BUFFER_BIT)
  context.clear(context.STENCIL_BUFFER_BIT)

  if (wasm.canvas) {
    dom.setStyle(wasm.canvas, "filter", "none")
  }

  const controlsToUnblur = dom.queryAll(dom.getElement("viewport-controls"), ".blurrable")
  controlsToUnblur.forEach((el) => dom.setStyle(el, "filter", "none"))
  wasm.canvasPixels = null
}

export function captureCanvasPixels(): void {
  if (!wasm.canvas) return

  const context = wasm.glContext
  const width = wasm.canvas.width
  const height = wasm.canvas.height
  const buffer = new Uint8ClampedArray(width * height * 4)
  context.readPixels(0, 0, width, height, context.RGBA, context.UNSIGNED_BYTE, buffer)
  const imageData = new ImageData(buffer, width, height)
  wasm.canvasPixels = imageData
}
