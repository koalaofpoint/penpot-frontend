import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.logging.js";
import "./app.render_wasm.wasm.js";
import "./app.util.dom.js";
goog.provide('app.render_wasm.api.webgl');
/**
 * Gets the WebGL context from the WASM module
 */
app.render_wasm.api.webgl.get_webgl_context = (function app$render_wasm$api$webgl$get_webgl_context(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var gl_obj = (app.render_wasm.wasm.internal_module["GL"]);
if(cljs.core.truth_(gl_obj)){
var current_ctx = gl_obj.currentContext;
if(cljs.core.truth_(current_ctx)){
return current_ctx.GLctx;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Creates a WebGL texture from an HTMLImageElement or ImageBitmap and returns the texture object
 */
app.render_wasm.api.webgl.create_webgl_texture_from_image = (function app$render_wasm$api$webgl$create_webgl_texture_from_image(gl,image_element){
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,texture);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image_element);

gl.bindTexture(gl.TEXTURE_2D,null);

return texture;
});
/**
 * Draws ImageData to a WebGL2 context by creating a texture
 */
app.render_wasm.api.webgl.draw_imagedata_to_webgl = (function app$render_wasm$api$webgl$draw_imagedata_to_webgl(gl,image_data){
var width = image_data.width;
var height = image_data.height;
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,texture);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image_data);

gl.viewport((0),(0),width,height);

var vertex_shader_source = "#version 300 es\nin vec2 a_position;\nin vec2 a_texCoord;\nout vec2 v_texCoord;\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_texCoord = a_texCoord;\n}";
var fragment_shader_source = "#version 300 es\nprecision highp float;\nin vec2 v_texCoord;\nuniform sampler2D u_texture;\nout vec4 fragColor;\nvoid main() {\n  fragColor = texture(u_texture, v_texCoord);\n}";
var vertex_shader = gl.createShader(gl.VERTEX_SHADER);
var fragment_shader = gl.createShader(gl.FRAGMENT_SHADER);
var program = gl.createProgram();
gl.shaderSource(vertex_shader,vertex_shader_source);

gl.compileShader(vertex_shader);

if(cljs.core.truth_(gl.getShaderParameter(vertex_shader,gl.COMPILE_STATUS))){
} else {
if(app.common.logging.enabled_QMARK_("app.render-wasm.api.webgl",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Vertex shader compilation failed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),gl.getShaderInfoLog(vertex_shader)], null)], null);
}),null)),null,null,"app.render-wasm.api.webgl",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}

}

gl.shaderSource(fragment_shader,fragment_shader_source);

gl.compileShader(fragment_shader);

if(cljs.core.truth_(gl.getShaderParameter(fragment_shader,gl.COMPILE_STATUS))){
} else {
if(app.common.logging.enabled_QMARK_("app.render-wasm.api.webgl",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Fragment shader compilation failed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),gl.getShaderInfoLog(fragment_shader)], null)], null);
}),null)),null,null,"app.render-wasm.api.webgl",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}

}

gl.attachShader(program,vertex_shader);

gl.attachShader(program,fragment_shader);

gl.linkProgram(program);

if(cljs.core.truth_(gl.getProgramParameter(program,gl.LINK_STATUS))){
gl.useProgram(program);

var position_location_55132 = gl.getAttribLocation(program,"a_position");
var texcoord_location_55133 = gl.getAttribLocation(program,"a_texCoord");
var position_buffer_55134 = gl.createBuffer();
var texcoord_buffer_55135 = gl.createBuffer();
var positions_55136 = [-1.0,-1.0,1.0,-1.0,-1.0,1.0,-1.0,1.0,1.0,-1.0,1.0,1.0];
var texcoords_55137 = [0.0,0.0,1.0,0.0,0.0,1.0,0.0,1.0,1.0,0.0,1.0,1.0];
gl.bindBuffer(gl.ARRAY_BUFFER,position_buffer_55134);

gl.bufferData(gl.ARRAY_BUFFER,(new Float32Array(positions_55136)),gl.STATIC_DRAW);

gl.enableVertexAttribArray(position_location_55132);

gl.vertexAttribPointer(position_location_55132,(2),gl.FLOAT,false,(0),(0));

gl.bindBuffer(gl.ARRAY_BUFFER,texcoord_buffer_55135);

gl.bufferData(gl.ARRAY_BUFFER,(new Float32Array(texcoords_55137)),gl.STATIC_DRAW);

gl.enableVertexAttribArray(texcoord_location_55133);

gl.vertexAttribPointer(texcoord_location_55133,(2),gl.FLOAT,false,(0),(0));

gl.activeTexture(gl.TEXTURE0);

gl.bindTexture(gl.TEXTURE_2D,texture);

var texture_location_55138 = gl.getUniformLocation(program,"u_texture");
gl.uniform1i(texture_location_55138,(0));

gl.drawArrays(gl.TRIANGLES,(0),(6));

gl.deleteBuffer(position_buffer_55134);

gl.deleteBuffer(texcoord_buffer_55135);

gl.deleteShader(vertex_shader);

gl.deleteShader(fragment_shader);

gl.deleteProgram(program);
} else {
if(app.common.logging.enabled_QMARK_("app.render-wasm.api.webgl",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Program linking failed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),gl.getProgramInfoLog(program)], null)], null);
}),null)),null,null,"app.render-wasm.api.webgl",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}

}

gl.bindTexture(gl.TEXTURE_2D,null);

return gl.deleteTexture(texture);
});
/**
 * Restores previous canvas pixels into the new canvas
 */
app.render_wasm.api.webgl.restore_previous_canvas_pixels = (function app$render_wasm$api$webgl$restore_previous_canvas_pixels(){
var temp__5825__auto__ = app.render_wasm.wasm.canvas_pixels;
if(cljs.core.truth_(temp__5825__auto__)){
var previous_canvas_pixels = temp__5825__auto__;
var temp__5825__auto____$1 = app.render_wasm.wasm.gl_context;
if(cljs.core.truth_(temp__5825__auto____$1)){
var gl = temp__5825__auto____$1;
app.render_wasm.api.webgl.draw_imagedata_to_webgl(gl,previous_canvas_pixels);

return (app.render_wasm.wasm.canvas_pixels = null);
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.api.webgl.clear_canvas_pixels = (function app$render_wasm$api$webgl$clear_canvas_pixels(){
if(cljs.core.truth_(app.render_wasm.wasm.canvas)){
var context_55139 = app.render_wasm.wasm.gl_context;
context_55139.clearColor((0),(0),(0),0.0);

context_55139.clear(context_55139.COLOR_BUFFER_BIT);

context_55139.clear(context_55139.DEPTH_BUFFER_BIT);

context_55139.clear(context_55139.STENCIL_BUFFER_BIT);

app.util.dom.set_style_BANG_(app.render_wasm.wasm.canvas,"filter","none");

var controls_to_unblur_55140 = app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_element("viewport-controls"),".blurrable");
cljs.core.run_BANG_((function (p1__55123_SHARP_){
return app.util.dom.set_style_BANG_(p1__55123_SHARP_,"filter","none");
}),controls_to_unblur_55140);

return (app.render_wasm.wasm.canvas_pixels = null);
} else {
return null;
}
});
/**
 * Captures the pixels of the viewport canvas
 */
app.render_wasm.api.webgl.capture_canvas_pixels = (function app$render_wasm$api$webgl$capture_canvas_pixels(){
if(cljs.core.truth_(app.render_wasm.wasm.canvas)){
var context = app.render_wasm.wasm.gl_context;
var width = app.render_wasm.wasm.canvas.width;
var height = app.render_wasm.wasm.canvas.height;
var buffer = (new Uint8ClampedArray(((width * height) * (4))));
var _ = context.readPixels((0),(0),width,height,context.RGBA,context.UNSIGNED_BYTE,buffer);
var image_data = (new ImageData(buffer,width,height));
return (app.render_wasm.wasm.canvas_pixels = image_data);
} else {
return null;
}
});

//# sourceMappingURL=app.render_wasm.api.webgl.js.map
