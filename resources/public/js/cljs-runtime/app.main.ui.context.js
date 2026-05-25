import "./cljs_env.js";
import "./cljs.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.context');
app.main.ui.context.render_id = rumext.v2.create_context(null);
app.main.ui.context.current_route = rumext.v2.create_context(null);
app.main.ui.context.current_profile = rumext.v2.create_context(null);
app.main.ui.context.current_team_id = rumext.v2.create_context(null);
app.main.ui.context.current_project_id = rumext.v2.create_context(null);
app.main.ui.context.current_page_id = rumext.v2.create_context(null);
app.main.ui.context.current_file_id = rumext.v2.create_context(null);
app.main.ui.context.current_vbox = rumext.v2.create_context(null);
app.main.ui.context.current_svg_root_id = rumext.v2.create_context(null);
app.main.ui.context.active_frames = rumext.v2.create_context(null);
app.main.ui.context.render_thumbnails = rumext.v2.create_context(null);
app.main.ui.context.libraries = rumext.v2.create_context(null);
app.main.ui.context.design_tokens = rumext.v2.create_context(null);
app.main.ui.context.token_inputs = rumext.v2.create_context(null);
app.main.ui.context.current_scroll = rumext.v2.create_context(null);
app.main.ui.context.current_zoom = rumext.v2.create_context(null);
app.main.ui.context.workspace_read_only_QMARK_ = rumext.v2.create_context(null);
app.main.ui.context.is_render_QMARK_ = rumext.v2.create_context(false);
app.main.ui.context.is_component_QMARK_ = rumext.v2.create_context(false);
/**
 * A context that intends to store the current sidebar position,
 *   usefull for components that behaves distinctly if they are showed in
 *   right sidebar or left sidebar.
 * 
 *   Possible values: `:right:` and `:left`.
 */
app.main.ui.context.sidebar = rumext.v2.create_context(null);
app.main.ui.context.permissions = rumext.v2.create_context(null);
app.main.ui.context.can_edit_QMARK_ = rumext.v2.create_context(null);
/**
 * Active tokens by type, used mainly for provide tokens data to the
 *   right sidebar menu options components.
 */
app.main.ui.context.active_tokens_by_type = rumext.v2.create_context(null);

//# sourceMappingURL=app.main.ui.context.js.map
