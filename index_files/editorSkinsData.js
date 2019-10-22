(function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define([], factory);
        } else if (typeof module === 'object' && module.exports) {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.returnExports = factory();
        }
    }(typeof self !== 'undefined' ? self : this, function () {
        // Just return a value to define the module export.
        // This example returns an object, but the module
        // can return a function as the exported value.
        'use strict';
        var skins = {};
         skins['wixui.skins.RichTextBox'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "10px 10px 10px #CCCCCC",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "20px",
    "state": "regular"
  },
  "txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "iconsColor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "iconsActiveColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#0000ff",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#0000EE",
    "state": "regular"
  },
  "toolbarBg": {
    "type": "COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "brwh": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#A4DAF5",
    "state": "hover"
  },
  "toolbarBgh": {
    "type": "COLOR",
    "defaultValue": "#d1d9f6",
    "state": "hover"
  },
  "brwf": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "focus"
  },
  "toolbarBgf": {
    "type": "COLOR",
    "defaultValue": "color_1",
    "state": "focus"
  },
  "brwe": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "focus"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#f63300",
    "state": "focus"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "focus"
  },
  "toolbarBge": {
    "type": "COLOR",
    "defaultValue": "color_1",
    "state": "focus"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "regular"
  },
  "brwd": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "regular"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "regular"
  },
  "toolbarBgd": {
    "type": "COLOR",
    "defaultValue": "#CCCCCC",
    "state": "regular"
  },
  "placeHolderTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#808080",
    "state": "regular"
  }
}
 skins['wixui.skins.ToggleSwitch'] = {
  "outerLabelBorderSizeFocus": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "focus"
  },
  "outerLabelBorderColorFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "focus"
  },
  "backgroundColorFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "focus"
  },
  "outerLabelBorderSizeDisabled": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "outerLabelBorderColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_20",
    "state": "regular"
  },
  "backgroundColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_3",
    "state": "regular"
  },
  "innerLabelBorderSizeDisabled": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "innerLabelBorderColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_25",
    "state": "regular"
  },
  "innerLabelBackgroundColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "colorCheckedDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_9",
    "state": "regular"
  },
  "colorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "outerLabelBorderSizeHoverChecked": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "outerLabelBorderColorHoverChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_22",
    "state": "hover"
  },
  "backgroundColorHoverChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "innerLabelBorderSizeHoverChecked": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "innerLabelBorderColorHoverChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_27",
    "state": "hover"
  },
  "innerLabelBackgroundColorHoverChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "colorHoverChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "outerLabelBorderSizeHover": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "outerLabelBorderColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "hover"
  },
  "backgroundColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "innerLabelBorderSizeHover": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "innerLabelBorderColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_26",
    "state": "hover"
  },
  "innerLabelBackgroundColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "hover"
  },
  "colorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_10",
    "state": "hover"
  },
  "outerLabelBorderSizeChecked": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "outerLabelBorderColorChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "backgroundColorChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "regular"
  },
  "innerLabelBorderSizeChecked": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "innerLabelBorderColorChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_24",
    "state": "regular"
  },
  "innerLabelBackgroundColorChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "colorChecked": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_7",
    "state": "regular"
  },
  "outerLabelBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "1.5px 1.5px 1px rgba(0,0,0,0.2)",
    "state": "regular"
  },
  "outerLabelBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "outerLabelBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "12px",
    "state": "regular"
  },
  "backgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "innerLabelBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "1.5px 1.5px 1px rgba(0,0,0,0.2)",
    "state": "regular"
  },
  "innerLabelBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "innerLabelBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "regular"
  },
  "innerLabelBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "color": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.AddProductButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_16",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.ApplyButtonEcom'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.BasicButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.BorderButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "rd2": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "brdh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.BrandButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "#000102",
    "state": "regular"
  },
  "shadowColor2": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "#000102",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bga": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "active"
  },
  "brda": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "active"
  },
  "txta": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "active"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonArrow'] = {
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonArrowLeft'] = {
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonDoubleArrowLeft'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonDoubleArrowRight'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonForkedLeft'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonForkedRight'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonInnerShadow'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonLiftedShadow'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonSandclock'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonShadowLeft'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonShadowRight'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ButtonThreeD'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  },
  "shc": {
    "type": "COLOR",
    "defaultValue": "color_17",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.CircleButton'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.DisabledLayerButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.EcomFeedbackCheckoutButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_14",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.EcomFeedbackContinueShopping'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.EcomFeedbackContinueShopping2'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.FixedFontButton'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.GamingButton'] = {
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "12px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.IronButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.59) 0 0 6px 0 inset, rgba(255, 255, 255, 0.92) 0 1px 0 0 inset, rgba(255, 255, 255, 0.2) 0 0 5px 0 inset",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.PillButton'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "80px",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.PlasticButton'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "15px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.RibbonButton'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ScotchTapeButton'] = {
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ShineButton'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.ShinyButtonIISkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ShinyButtonISkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ShinyButtonInverted'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ShinyGradientButton'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "15px",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.ShinyPillButton'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "80px",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.button.SiteButtonBlueSkin'] = {
  "borderColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#5b8fa7",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#2aa7ea",
    "state": "regular"
  },
  "borderColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#237aa7",
    "state": "hover"
  },
  "bgColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#179ce1",
    "state": "hover"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.2",
    "state": "hover"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "68, 175, 233, 0.7",
    "state": "hover"
  },
  "labelColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.SiteButtonSkin'] = {
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "clr": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.SloopyButton'] = {
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.TextOnlyButtonSkin'] = {
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.button.ViewerButtonBlueSkin'] = {
  "borderColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#5b8fa7",
    "state": "regular"
  },
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#2aa7ea",
    "state": "regular"
  },
  "borderColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#237aa7",
    "state": "regular"
  },
  "bgColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#179ce1",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.2",
    "state": "regular"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "68, 175, 233, 0.7",
    "state": "regular"
  },
  "shadowInsetColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.7",
    "state": "regular"
  },
  "labelColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "borderGrayColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#c4c4c4",
    "state": "regular"
  },
  "bgGrayColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f9fafc",
    "state": "regular"
  },
  "borderGrayColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#89a4af",
    "state": "regular"
  },
  "bgGrayColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f2f3f5",
    "state": "regular"
  },
  "labelGrayColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#24a0c4",
    "state": "regular"
  },
  "borderDisabledColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#d5d5d5",
    "state": "regular"
  },
  "bgDisabledColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f9fafc",
    "state": "regular"
  },
  "labelDisabledColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#c4c4c4",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.WrappingButton'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "horizontalPadding": {
    "type": "PADDING_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "verticalPadding": {
    "type": "PADDING_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['AutoWidthAnchorSkin'] = {}
 skins['wysiwyg.common.components.anchor.viewer.skins.AnchorSkin'] = {}
 skins['wysiwyg.viewer.skins.FiveGridLineSkin'] = {
  "clr": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_3",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.ArrowLine'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.ArrowRightLine'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.DashedLine'] = {
  "lnw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.DottedLine'] = {
  "lnw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.DoubleLine'] = {
  "lnw1": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lnw2": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "dst": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.DoubleLine2'] = {}
 skins['wysiwyg.viewer.skins.line.DoubleLine3'] = {}
 skins['wysiwyg.viewer.skins.line.FadeLine'] = {}
 skins['wysiwyg.viewer.skins.line.FadeNotchBottomLine'] = {}
 skins['wysiwyg.viewer.skins.line.FadeNotchTopLine'] = {}
 skins['wysiwyg.viewer.skins.line.FiveGridLine'] = {}
 skins['wysiwyg.viewer.skins.line.IronLine'] = {
  "lnw": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "clr": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.NotchDashedLine'] = {}
 skins['wysiwyg.viewer.skins.line.NotchLine'] = {}
 skins['wysiwyg.viewer.skins.line.ShadowBottomLine'] = {}
 skins['wysiwyg.viewer.skins.line.ShadowTopLine'] = {}
 skins['wysiwyg.viewer.skins.line.SloppyLine'] = {}
 skins['wysiwyg.viewer.skins.line.SolidLine'] = {
  "lnw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.ZigzagLineFlipSkin'] = {
  "zigzagsize": {
    "type": "BG_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.ZigzagLineSkin'] = {
  "zigzagsize": {
    "type": "BG_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.PageGroupSkin'] = {}
 skins['platform.components.skins.AppWidgetLoaderSkin'] = {}
 skins['platform.components.skins.AppWidgetSkin'] = {}
 skins['skins.core.InlineSkin'] = {}
 skins['skins.viewer.area.ScotchDoubleHorizontalArea'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['skins.viewer.area.ScotchDoubleVerticalArea'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['skins.viewer.area.ScotchTopArea'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.components.GroupSkin'] = {}
 skins['wysiwyg.viewer.skins.FormContainerSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "loader": {
    "type": "ALPHA",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.VerticalRepeaterEmptySkin'] = {}
 skins['wysiwyg.viewer.skins.VerticalRepeaterSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px 0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.apps.DefaultBoxSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 1px rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#333",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.AppleArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.ArrowRightRibbon'] = {
  "rb": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.BlankAreaSkin'] = {
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.BorderDashDefaultAreaSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.BubbleArea'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.BubbleAreaLeft'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px 2px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.BubbleAreaRight'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px 2px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.BubbleLeftArea'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.CenterRibbon'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rb2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "rb1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.CircleArea'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.CleanZoomAreaSkin'] = {}
 skins['wysiwyg.viewer.skins.area.CustomRibbonArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rb3": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rb1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "rb2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.DBDefaultAreaSkin'] = {
  "sz1": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "sz2": {
    "type": "SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "sz3": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.DefaultAreaSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.ForkedRibbonArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "rb3": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rb4": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rb1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "rb2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.ForkedRightRibbon'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rb1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.GridArea'] = {}
 skins['wysiwyg.viewer.skins.area.InnerMarginAreaSkin'] = {
  "$BorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "$boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 1px 1px 6px rgba(255, 255, 255, 0.9), inset -1px -1px 6px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.InnerShadowAreaSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.75)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.IronBox'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 0 6px 0 rgba(255, 255, 255, 0.59), inset 0 1px 0 0 rgba(255, 255, 255, 0.92), inset 0 0 5px 0 rgba(255, 255, 255, 0.2)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.LeftTriangleArea'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.LiftedBottomAreaSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.LiftedShadowArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.LiftedTopAreaSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.LinesAreaSkin'] = {
  "brwT": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "7px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwB": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.PhotoArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 5px rgba(0, 0, 0, 0.1)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.RectangleArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.RibbonAreaSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "els": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "elm": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "elm2": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.RightTriangleArea'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.RoundArea'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.RoundShadowArea'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "15px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.SandClockArea'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.SloopyArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.ThreeDeeAreaSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "shc": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.TiltedAreaSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.TransparentArea'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.VerticalArrowArea'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.VerticalRibbonArea'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.area.WrapperSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.AppleScreen'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(0, 0, 0, 0.6), 0 0 5px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brwt": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwb": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.BlankScreen'] = {}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.BoxScreen'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "brwt": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwb": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgctr": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.DoubleBorderScreen'] = {
  "bgPosition": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "bordersPosition": {
    "type": "SIZE",
    "defaultValue": "6",
    "state": "regular"
  },
  "outerLineSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lineGap": {
    "type": "SIZE",
    "defaultValue": "5",
    "state": "regular"
  },
  "innerLineSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.GridScreen'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.InnerShadowScreen'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.75)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.IronScreen'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "shadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 4px 6px -4px rgba(255, 255, 255, 0.59), inset 0 1px 0 0 rgba(255, 255, 255, 0.59), inset 0 -5px 5px -5px rgba(255, 255, 255, 0.9)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.LiftedBottomScreen'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.LiftedShadowScreen'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.LiftedTopScreen'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.LineBottomScreen'] = {
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.LineTopScreen'] = {
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.NoiseScreen'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.ShadowBottomScreen'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "brwt": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwb": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgctr": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.ShadowScreen'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.ShadowTopScreen'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "brwt": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwb": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgctr": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.SolidScreen'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.ThreeDeeScreen'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shc": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.TransparentHalfScreen'] = {
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen'] = {}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.TwoColorScreen'] = {
  "bgc1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brw1": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "xxx": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgc2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.WoodScreen'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "$BorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "$boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.8)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.VerticalLineSkin'] = {}
 skins['wysiwyg.viewer.skins.line.VerticalArrowLine'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalArrowLineTop'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalDashedLine'] = {
  "lnw": {
    "type": "BORDER_LEFT_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "mrg": {
    "type": "SIZE",
    "defaultValue": "3px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalDottedLine'] = {
  "lnw": {
    "type": "BORDER_LEFT_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "mrg": {
    "type": "SIZE",
    "defaultValue": "3px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalDoubleLine'] = {
  "dst": {
    "type": "WIDTH_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "lnw1": {
    "type": "BORDER_LEFT_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lnw2": {
    "type": "BORDER_RIGHT_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalFadeNotchLeftLine'] = {}
 skins['wysiwyg.viewer.skins.line.VerticalFadeNotchRightLine'] = {}
 skins['wysiwyg.viewer.skins.line.VerticalIronLine'] = {
  "lnw": {
    "type": "WIDTH_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "clr": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalNotchDashedLine'] = {
  "lnw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalNotchLine'] = {
  "lnw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.line.VerticalShadowLeftLine'] = {}
 skins['wysiwyg.viewer.skins.line.VerticalShadowRightLine'] = {}
 skins['wysiwyg.viewer.skins.line.VerticalSloopyLine'] = {}
 skins['wysiwyg.viewer.skins.line.VerticalSolidLine'] = {
  "lnw": {
    "type": "BORDER_LEFT_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "mrg": {
    "type": "SIZE",
    "defaultValue": "3px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.VideoSkin'] = {}
 skins['wysiwyg.viewer.skins.video.VideoDefault'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.video.VideoLiftedShadow'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.video.VideoSloppy'] = {}
 skins['mobile.core.skins.ImageNewSkin'] = {}
 skins['wysiwyg.viewer.skins.ClipArtSkin'] = {}
 skins['skins.core.ImageNewSkinZoomable'] = {}
 skins['wysiwyg.viewer.skins.photo.CirclePhoto'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.DefaultPhoto'] = {}
 skins['wysiwyg.viewer.skins.photo.DoubleBorderCirclePhoto'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "sz1": {
    "type": "BORDER_SIZE",
    "defaultValue": "4px",
    "state": "regular"
  },
  "brd1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "sz2": {
    "type": "MARGIN_SIZE",
    "defaultValue": "6px",
    "state": "regular"
  },
  "sz4": {
    "type": "MARGIN_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "sz3": {
    "type": "BORDER_SIZE",
    "defaultValue": "8px",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.DoubleBorderPhoto'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "mrg1": {
    "type": "MARGIN_SIZE",
    "defaultValue": "7px",
    "state": "regular"
  },
  "brd1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "sz1": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "sz2": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "mrg2": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.GlowLinePhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.IronPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.LiftedShadowPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.LiftedTopPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.MouseOverPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.NewPolaroidPhoto'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 2px 1px rgba(0, 0, 0, 0.1)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.NoSkinPhoto'] = {}
 skins['skins.core.ImageNewSkin'] = {}
 skins['wysiwyg.viewer.skins.photo.PaperclipPhoto'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.PolaroidPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.RoundPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.RoundShadowPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.ScotchDoubleHorizontal'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.ScotchDoubleVertical'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.ScotchTapePhoto'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.ScotchTopPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.SloppyPhoto'] = {}
 skins['wysiwyg.viewer.skins.photo.VintagePhoto'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "clr": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "15px",
    "state": "regular"
  }
}
 skins['skins.core.ImageSkin'] = {}
 skins['skins.image.default'] = {}
 skins['wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer'] = {}
 skins['wysiwyg.viewer.skins.mediaContainer.MediaBox'] = {}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.GradientBottomScreen'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.GradientTopScreen'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.GrassScreen'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "$BorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "$boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.8)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.PopupOverlayContainer'] = {}
 skins['wysiwyg.viewer.skins.screenwidthcontainer.SimpleScreen'] = {
  "bgc1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgc2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.stripContainer.DefaultStripContainer'] = {}
 skins['wysiwyg.viewer.skins.WRichTextClickableSkin'] = {}
 skins['wysiwyg.viewer.skins.WRichTextNewSkin'] = {}
 skins['wysiwyg.viewer.skins.WRichTextSkin'] = {}
 skins['wysiwyg.viewer.skins.AdminLoginSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.button.AdminLoginButtonSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.audioplayer.Audio3DPlayer'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "iconh": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "active"
  },
  "shd1": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 4px 2px rgba(0, 0, 0, 0.2)",
    "state": "active"
  },
  "shd2": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 15px -3px rgba(255, 255, 255, 0.6), inset 0 3px 2px -2px rgba(255, 255, 255, 0.7)",
    "state": "regular"
  },
  "icon": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh2": {
    "type": "BG_COLOR",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "bg2": {
    "type": "BG_COLOR",
    "defaultValue": "color_17",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.audioplayer.BoldPlayer'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.audioplayer.ShinyPlayer'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "iconh": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "active"
  },
  "shd1": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 4px 1px rgba(0, 0, 0, 0.2)",
    "state": "active"
  },
  "icon": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.audioplayer.SimplePlayer'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "icon": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "iconh": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.AudioPlayerMinimalSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['skins.viewer.bgImage.bgImageSkin'] = {}
 skins['skins.viewer.bgMedia.bgMediaSkin'] = {}
 skins['skins.viewer.bgOverlay.bgOverlaySkin'] = {}
 skins['skins.viewer.bgVideo.html5VideoSkin'] = {}
 skins['skins.viewer.bgVideo.iframeVideoSkin'] = {}
 skins['skins.viewer.bgVideo.webglMediaSkin'] = {}
 skins['wysiwyg.viewer.skins.backtotopbutton.BackToTopButtonSkin'] = {}
 skins['wysiwyg.common.components.boxSlideShowSlide.viewer.skins.boxSlideShowSlideSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.statebox.viewer.skins.StateBoxStateFormSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.CheckboxBasicSkin'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "brwh": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "bgch": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "brwf": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "focus"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "error"
  },
  "brwe": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "error"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brwd": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "disabled"
  },
  "bgcd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "disabled"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['skins.input.CheckboxGroupDefaultSkin'] = {
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "brwh": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "bgch": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "brwf": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "focus"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "error"
  },
  "brwe": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "error"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brwd": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "disabled"
  },
  "bgcd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "disabled"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['ComboBoxInputSkin'] = {
  "brwe": {
    "type": "BORDER_SIZES",
    "defaultValue": "2px",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "error"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "error"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#888888",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt_placeholder": {
    "type": "TEXT_COLOR",
    "defaultValue": "#888888",
    "state": "regular"
  },
  "brwh": {
    "type": "BORDER_SIZES",
    "defaultValue": "2px",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "hover"
  },
  "brwf": {
    "type": "BORDER_SIZES",
    "defaultValue": "2px",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "focus"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.AppsComboBoxInputSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#333",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#1ab1ab",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#aaa",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.AppsComboBoxInputSkinNoValidation'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#333",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#1ab1ab",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#aaa",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.ComboBoxInputSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#333",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#1ab1ab",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#aaa",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.ComboBoxInputSkinNoValidation'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#888888",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwh": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "hover"
  },
  "brwf": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "focus"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "error"
  },
  "brwe": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "error"
  }
}
 skins['skins.core.VerySimpleSkin'] = {}
 skins['wysiwyg.viewer.skins.AppPartSkin'] = {}
 skins['wysiwyg.viewer.skins.input.TextInputSquareSkin'] = {}
 skins['wysiwyg.viewer.skins.PasswordLoginSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#9c9c9c",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  }
}
 skins['skins.viewer.balata.balataBaseSkin'] = {}
 skins['skins.viewer.bgimagestrip.BevelScreenSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brwt": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwb": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.592157) 0 4px 6px -4px inset, rgba(255, 255, 255, 0.592157) 0 1px 0 0 inset, rgba(255, 255, 255, 0.901961) 0 -5px 5px -5px inset",
    "state": "regular"
  }
}
 skins['skins.viewer.bgimagestrip.BgImageStripSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "brwt": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwb": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.bgimagestrip.DefaultScreenSkin'] = {
  "brwt": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwb": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(0, 0, 0, 0.6), 0 0 5px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['skins.viewer.bgimagestrip.DoubleBorderScreenSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgPosition": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "bordersPosition": {
    "type": "SIZE",
    "defaultValue": "6",
    "state": "regular"
  },
  "outerLineSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lineGap": {
    "type": "SIZE",
    "defaultValue": "5",
    "state": "regular"
  },
  "innerLineSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['skins.viewer.bgimagestrip.IronScreenSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.592157) 0 4px 6px -4px inset, rgba(255, 255, 255, 0.592157) 0 1px 0 0 inset, rgba(255, 255, 255, 0.901961) 0 -5px 5px -5px inset",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.ArrowRightMenuButtonNSkin'] = {
  "pad": {
    "type": "MARGIN_LEFT_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.ArrowRightMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_LEFT_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "padLeft": {
    "type": "MARGIN_LEFT_SIZE",
    "defaultValue": "70",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.IndentedMenuButtonNSkin'] = {
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.IndentedMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.LinesMenuButtonNBorderRadiusFixSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.LinesMenuButtonBorderRadiusFixSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.LinesMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.LinesMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.OverlineMenuButtonHorizontalMenuAdaptationSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brdh": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.OverlineMenuButtonHorizontalMenuAdaptationSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brdh": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.OverlineMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brdh": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.OverlineMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brdh": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.PointerMenuButtonHorizontalMenuAdaptationSkin'] = {
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.PointerMenuButtonHorizontalMenuAdaptationSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.PointerMenuButtonNSkin'] = {
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.PointerMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.RibbonsMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.RibbonsMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "els": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 3px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "elm": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "elm2": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparateBasicMenuButtonNSkin'] = {
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "nord": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateBasicMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "nord": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparateIndentedMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateIndentedMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparateLinesMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateLinesMenuButtonHorizontalMenuAdaptationSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateLinesMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparateShinyIIMenuButtonNBorderRadiusFixSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateShinyIIMenuButtonBorderRadiusFixSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparateShinyIIMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateShinyIIMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparateShinyIMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateShinyIMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "noshd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "no_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.ShinyMenuIButtonNSkin'] = {
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.ShinyMenuIButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.ShinyMenuIIButtonNSkin'] = {
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.ShinyMenuIIButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SloppyBorderMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SloppyBorderMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SolidColorMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "sep": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.SolidColorMenuButtonSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "sep": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.TextOnlyMenuButtonNSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.TextOnlyMenuButtonBgFixSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.TextOnlyMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.TextSeparatorsMenuButtonNSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "sep": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.TextSeparatorsMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "sep": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.VerticalRibbonsMenuButtonNSkin'] = {
  "pad": {
    "type": "SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "els": {
    "type": "BORDER_SIZE",
    "defaultValue": "10",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "ribbonShd": {
    "type": "BOX_SHADOW",
    "defaultValue": "2px 0 2px 0 rgba(0, 0, 0, 0.2)",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "elmOver": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "elmSelected": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.dropdownmenu.viewer.skins.VerticalRibbonsMenuButtonSkin'] = {
  "menuTotalBordersX": {
    "type": "WIDTH_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "menuTotalBordersY": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "els": {
    "type": "BORDER_SIZE",
    "defaultValue": "10",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 3px rgba(0, 0, 0, 0.7)",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "pad": {
    "type": "SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "ribbonShd": {
    "type": "BOX_SHADOW",
    "defaultValue": "2px 0 2px 0 rgba(0, 0, 0, 0.2)",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "elmOver": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "elmSelected": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.DiagonalMenuButtonSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txts": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenu.DiagonalMenuSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.menubutton.ArrowsMenuButtonSkin'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.menu.ArrowsMenuSkin'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.menubutton.CirclesMenuButtonSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "clr5": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_9",
    "state": "regular"
  },
  "clr2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "clr3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_3",
    "state": "regular"
  },
  "clr4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "regular"
  },
  "clr1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "clr6": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtac": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_7",
    "state": "active"
  }
}
 skins['wysiwyg.viewer.skins.menu.CirclesMenuSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "clr5": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_9",
    "state": "regular"
  },
  "clr2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "clr3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_3",
    "state": "regular"
  },
  "clr4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "regular"
  },
  "clr1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "clr6": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtac": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_7",
    "state": "active"
  }
}
 skins['wysiwyg.viewer.skins.menubutton.SeparateArrowDownMenuButtonSkin'] = {
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.menu.SeparateArrowDownMenuSkin'] = {
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.menubutton.SeparatedArrowsMenuButtonSkin'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwA": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.menu.SeparatedArrowsMenuSkin'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwA": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.ecommerce.options.InfoTipSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, .6);",
    "state": "regular"
  },
  "txtcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#656565",
    "state": "regular"
  },
  "bgcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fffedf",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.option.InfoTipArrowSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.25)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.ArrowsMenuButtonNSkin'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.CirclesMenuButtonNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "regular"
  },
  "brw": {
    "type": "PADDING_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brdh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "nord": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.ForkedBannerMenuButtonSkin'] = {
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.ForkedRibbonMenuButtonSkin'] = {
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparateArrowDownMenuButtonNSkin'] = {
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SeparatedArrowsMenuButtonNSkin'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwA": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenubutton.SlantedMenuButtonNSkin'] = {
  "pad": {
    "type": "MARGIN_LEFT_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.BasicPageSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.BorderPageSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.InnerShadowPageSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.75)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.LiftedBottomPageSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.LiftedShadowPageSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.LiftedTopPageSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.NoMarginPageSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.ShinyIPageSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.SloopyPageSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.ThreeDeePageSkin'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shc": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.page.TransparentPageSkin'] = {}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridArrowsOutside'] = {
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridDefaultSkin'] = {
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridOverlay'] = {
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridRibbonArrows'] = {
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "bg2": {
    "type": "COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridTextBottom'] = {
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.siteBackgroundSkin'] = {}
 skins['skins.viewer.galleryslider.SliderDisplayerIronSkin2'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "hover"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 0 6px 0 rgba(255, 255, 255, 0.59), inset 0 1px 0 0 rgba(255, 255, 255, 0.92), inset 0 0 5px 0 0 rgba(255, 255, 255, 0.2)",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderDisplayerDefaultSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SliderGalleryBorder'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryselectableslider.SelectableSliderDisplayerDefaultSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "hover"
  },
  "brs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryselectableslider.SelectableSliderGalleryDefaultSkin'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderDisplayerVintageSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 5px rgba(0, 0, 0, 0.1)",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderDisplayerCircleSkin'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "hover"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderGalleryCircleSkin'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "hover"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderGalleryDefaultSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderDisplayerIronSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "hover"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.59) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.92) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 0px 5px 0px inset",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderGalleryIronSkin'] = {
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.59) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.92) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 0px 5px 0px inset",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "hover"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderGalleryMinimal'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderDisplayerNoArrows'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderGalleryNoArrow'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderDisplayerScotchTapeSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "hover"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderGalleryScotchTapeSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "hover"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.galleryslider.SliderGalleryVintageSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 5px rgba(0, 0, 0, 0.1)",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.AppsTextInputSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwh": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "hover"
  },
  "brwf": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "focus"
  },
  "brwe": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "error"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "error"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  },
  "brwd": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "disabled"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.basicmenu.viewer.skins.BasicMenuSkin'] = {}
 skins['wysiwyg.common.components.multiselection.viewer.skins.MultiSelectionSkin'] = {}
 skins['wysiwyg.common.components.multiselectionitem.viewer.skins.MultiSelectionItemSkin'] = {}
 skins['wysiwyg.viewer.skins.appinputs.AppsTextInputSkinNoValidation'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.DateInputSkin'] = {}
 skins['wysiwyg.viewer.skins.AreaSkin'] = {
  "$BorderRadius30": {
    "type": "BORDER_RADIUS",
    "defaultValue": "30px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.BorderDisplayer'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.DetailedDisplayerSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.LiftedShadowDisplayer'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.MinimalDisplayer'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SimpleDetailedDisplayer'] = {}
 skins['wysiwyg.viewer.skins.dropmenu.ArrowsMenuNSkin'] = {
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenu.CirclesMenuNSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "regular"
  },
  "brw": {
    "type": "PADDING_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brdh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brds": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "nord": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenu.ForkedBannerMenuSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "rb3": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rb4": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rb1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "rb2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "bgDrop": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenu.ForkedRibbonMenuSkin'] = {
  "bg": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "bgDrop": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_TOP_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenu.SeparateArrowDownMenuNSkin'] = {
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brds": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenu.SeparatedArrowsMenuNSkin'] = {
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "pad": {
    "type": "MARGIN_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwA": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dropmenu.SlantedMenuNSkin'] = {
  "pad": {
    "type": "MARGIN_LEFT_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdDrop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "padLeft": {
    "type": "MARGIN_LEFT_SIZE",
    "defaultValue": "70",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.LiftedShadowMatrixGallery'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.MatrixGalleryMinimal'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "lnk-h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "lnk": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.TextBelowDisplayerSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.MatrixGalleryTextBelowSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.TextOnRollDisplayerSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt1": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.TextOnRollMatrixGallerySkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 2px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt1": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerGlowLine'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 1px 10px 1px rgba(255, 255, 255, 0.4), inset 0 0 59px rgba(0, 0, 0, 0.59)",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.GlowLineMatrixGallery'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 1px 10px 1px rgba(255, 255, 255, 0.4), inset 0 0 59px rgba(0, 0, 0, 0.59)",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.IFrameComponentSkin'] = {}
 skins['wysiwyg.viewer.skins.input.CheckBoxInputSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#999999",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.CheckBoxInputSkinNoValidation'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#aaa",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.ComboBoxInputSimpleSkin'] = {
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.SMLoginCheckBoxSkin'] = {}
 skins['wysiwyg.viewer.skins.input.TextAreaInputSkinNoValidation'] = {}
 skins['wysiwyg.viewer.skins.input.TextInputRoundSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 1px 1px 4px #CCCCCC",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.TextInputSkin'] = {}
 skins['wysiwyg.viewer.skins.menubutton.SeparateShinyIMenuButtonSkin'] = {
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.menubutton.ShinyMenuIButtonSkin'] = {
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.MobileTryAgainMessageViewSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.ModalSkin'] = {}
 skins['wysiwyg.viewer.skins.option.InfoTipSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.counter.CounterTextSkin'] = {}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridPolaroid'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "txtHi": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "regular"
  },
  "txtGrayed": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.photo.LfShwDBPhoto'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.SliderGallerySkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.SlideShowGallerySkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.sm.SMApplyForMembershipSkin'] = {}
 skins['wysiwyg.viewer.skins.sm.SMRegisterSkin'] = {}
 skins['wysiwyg.viewer.skins.sm.SMContainerSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#9c9c9c",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.sm.SMLoginSkin'] = {}
 skins['wysiwyg.viewer.skins.sm.SMProfileSkin'] = {}
 skins['wysiwyg.viewer.skins.sm.SMResetPasswordEmailSkin'] = {}
 skins['wysiwyg.viewer.skins.sm.SMResetPasswordSkin'] = {}
 skins['wysiwyg.viewer.skins.TryAgainMessageViewSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "borderColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#5b8fa7",
    "state": "regular"
  },
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#2aa7ea",
    "state": "regular"
  },
  "borderColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#237aa7",
    "state": "regular"
  },
  "bgColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#179ce1",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.2",
    "state": "regular"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "68, 175, 233, 0.7",
    "state": "regular"
  },
  "shadowInsetColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.7",
    "state": "regular"
  },
  "labelColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "borderGrayColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#c4c4c4",
    "state": "regular"
  },
  "bgGrayColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f9fafc",
    "state": "regular"
  },
  "borderGrayColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#89a4af",
    "state": "regular"
  },
  "bgGrayColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f2f3f5",
    "state": "regular"
  },
  "labelGrayColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#24a0c4",
    "state": "regular"
  },
  "borderDisabledColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#d5d5d5",
    "state": "regular"
  },
  "bgDisabledColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f9fafc",
    "state": "regular"
  },
  "labelDisabledColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#c4c4c4",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.wphoto.PaperclipWPhotoSkin'] = {
  "$boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.wphoto.PolaroidWPhotoSkin'] = {
  "$boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.CheckBoxGroupInputSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#999999",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.NumberInputSkin'] = {
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#cccccc",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.RadioGroupInputSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#999999",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  }
}
 skins['skins.core.ButtonSkin'] = {}
 skins['skins.core.ContactItemSkin'] = {
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "textColor",
    "state": "regular"
  },
  "itemSpacing": {
    "type": "CSSString",
    "defaultValue": "itemSpacing",
    "state": "regular"
  },
  "$ButtonIconBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "iconBgColor",
    "state": "regular"
  },
  "iconSize": {
    "type": "WIDTH_SIZE",
    "defaultValue": "iconSize",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontButton",
    "state": "regular"
  }
}
 skins['skins.core.GlobalMenuSkin'] = {}
 skins['skins.core.HeaderSkin'] = {
  "headerSpacing": {
    "type": "MARGIN_TOP_SIZE",
    "defaultValue": "headerSpacing",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "headerBgColor",
    "state": "regular"
  },
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "headerTextColor",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontHeader",
    "state": "regular"
  }
}
 skins['skins.core.HomeButtonSkin'] = {
  "ButtonBorder": {
    "type": "CSSString",
    "defaultValue": "borderButton",
    "state": "regular"
  },
  "sitePadding": {
    "type": "CSSString",
    "defaultValue": "padding1",
    "state": "regular"
  },
  "componentSpacing": {
    "type": "CSSString",
    "defaultValue": "componentSpacing",
    "state": "regular"
  },
  "$BorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusButton",
    "state": "regular"
  },
  "$ButtonBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "areaBgColor",
    "state": "regular"
  },
  "padding": {
    "type": "CSSString",
    "defaultValue": "padding2",
    "state": "regular"
  },
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "textColor",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontButton",
    "state": "regular"
  }
}
 skins['skins.core.MenuButtonSkin'] = {
  "ButtonBorder": {
    "type": "CSSString",
    "defaultValue": "borderButton",
    "state": "regular"
  },
  "ItemSpacing": {
    "type": "CSSString",
    "defaultValue": "itemSpacing",
    "state": "regular"
  },
  "$BorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusButton",
    "state": "regular"
  },
  "iconSize": {
    "type": "PADDING_SIZE",
    "defaultValue": "iconSize",
    "state": "regular"
  },
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "textColor",
    "state": "regular"
  },
  "$ButtonBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "areaBgColor",
    "state": "regular"
  },
  "$ButtonIconBorder": {
    "type": "CSSString",
    "defaultValue": "borderIcon",
    "state": "regular"
  },
  "$ButtonIconBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "iconBgColor",
    "state": "regular"
  },
  "$ButtonIconBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusIcon",
    "state": "regular"
  },
  "bulletSize": {
    "type": "PADDING_SIZE",
    "defaultValue": "bulletSize",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontButton",
    "state": "regular"
  }
}
 skins['skins.core.NetworkItemSkin'] = {
  "itemSpacing": {
    "type": "CSSString",
    "defaultValue": "itemSpacing",
    "state": "regular"
  },
  "$ButtonIconBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "iconBgColor",
    "state": "regular"
  },
  "iconSize": {
    "type": "WIDTH_SIZE",
    "defaultValue": "iconSize",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontButton",
    "state": "regular"
  },
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "textColor",
    "state": "regular"
  }
}
 skins['skins.core.NetworkListSkin'] = {
  "componentSpacing": {
    "type": "CSSString",
    "defaultValue": "componentSpacing",
    "state": "regular"
  },
  "$BorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusContainer",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "areaBgColor",
    "state": "regular"
  },
  "padding": {
    "type": "CSSString",
    "defaultValue": "padding1",
    "state": "regular"
  },
  "border": {
    "type": "CSSString",
    "defaultValue": "borderContainer",
    "state": "regular"
  }
}
 skins['skins.core.PhotoFullScreenSkin'] = {
  "$overlayBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.8",
    "state": "regular"
  },
  "padding": {
    "type": "CSSString",
    "defaultValue": "padding1",
    "state": "regular"
  },
  "overlayFontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "255, 255, 255, 1",
    "state": "regular"
  },
  "$fontTitle": {
    "type": "FONT",
    "defaultValue": "fontSubTitle",
    "state": "regular"
  },
  "$fontDesc": {
    "type": "FONT",
    "defaultValue": "fontText",
    "state": "regular"
  }
}
 skins['skins.core.PhotoGalleryFullScreenDefaultSkin'] = {
  "$overlayBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.8",
    "state": "regular"
  },
  "padding": {
    "type": "CSSString",
    "defaultValue": "padding1",
    "state": "regular"
  },
  "overlayFontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "255, 255, 255, 1",
    "state": "regular"
  },
  "$fontTitle": {
    "type": "FONT",
    "defaultValue": "fontSubTitle",
    "state": "regular"
  },
  "$fontDesc": {
    "type": "FONT",
    "defaultValue": "fontText",
    "state": "regular"
  }
}
 skins['skins.core.PhotoGalleryGridDefaultSkin'] = {
  "componentSpacing": {
    "type": "CSSString",
    "defaultValue": "componentSpacing",
    "state": "regular"
  },
  "thumbSpacing": {
    "type": "CSSString",
    "defaultValue": "thumbSpacing",
    "state": "regular"
  },
  "$thumbBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusThumb",
    "state": "regular"
  },
  "borderThumb": {
    "type": "CSSString",
    "defaultValue": "borderThumb",
    "state": "regular"
  }
}
 skins['mobile.core.skins.PhotoFullScreenSkin'] = {}
 skins['skins.core.PhotoSkin'] = {}
 skins['skins.core.RichTextImageSkin'] = {
  "itemSpacing": {
    "type": "CSSString",
    "defaultValue": "itemSpacing",
    "state": "regular"
  },
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusContainer",
    "state": "regular"
  },
  "border": {
    "type": "CSSString",
    "defaultValue": "borderContainer",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "areaBgColor",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontText",
    "state": "regular"
  },
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "textColor",
    "state": "regular"
  }
}
 skins['skins.core.RichTextSkin'] = {
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusContainer",
    "state": "regular"
  },
  "border": {
    "type": "CSSString",
    "defaultValue": "borderContainer",
    "state": "regular"
  },
  "componentSpacing": {
    "type": "CSSString",
    "defaultValue": "componentSpacing",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "areaBgColor",
    "state": "regular"
  },
  "padding": {
    "type": "CSSString",
    "defaultValue": "padding1",
    "state": "regular"
  },
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "textColor",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontText",
    "state": "regular"
  }
}
 skins['skins.core.ServiceItemSkin'] = {
  "itemSpacing": {
    "type": "CSSString",
    "defaultValue": "itemSpacing",
    "state": "regular"
  },
  "border": {
    "type": "CSSString",
    "defaultValue": "borderContainer",
    "state": "regular"
  },
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "radiusContainer",
    "state": "regular"
  },
  "$bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "areaBgColor",
    "state": "regular"
  },
  "fontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "textColor",
    "state": "regular"
  },
  "$fontTitle": {
    "type": "FONT",
    "defaultValue": "fontSubTitle",
    "state": "regular"
  },
  "$font": {
    "type": "FONT",
    "defaultValue": "fontText",
    "state": "regular"
  },
  "$moreBgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "textColor",
    "state": "regular"
  },
  "moreFontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "areaBgColor",
    "state": "regular"
  },
  "bgColor": {
    "type": "COLOR",
    "defaultValue": "areaBgColor",
    "state": "regular"
  }
}
 skins['skins.core.ServiceListSkin'] = {}
 skins['skins.core.SimpleButtonSkin'] = {}
 skins['wysiwyg.viewer.skins.contactform.ButtonBaseSkinDefault'] = {}
 skins['wysiwyg.viewer.skins.contactform.ButtonInputSkinDefault'] = {}
 skins['wysiwyg.viewer.skins.contactform.InputSkinDefault'] = {}
 skins['wysiwyg.viewer.skins.contactform.LabelSkinDefault'] = {}
 skins['wysiwyg.viewer.skins.contactform.TextAreaSkinDefault'] = {}
 skins['wysiwyg.viewer.skins.ContactFormSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "bgc1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_3",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "c1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "bgc2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_3",
    "state": "regular"
  },
  "c2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_8",
    "state": "regular"
  }
}
 skins['contactform.FieldAnimationSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtError": {
    "type": "TEXT_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "bg3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt4": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  }
}
 skins['contactform.FullWidthButtonSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0px 0px rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "1",
    "state": "regular"
  }
}
 skins['contactform.LineOnlySkin'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#FF0000",
    "state": "regular"
  },
  "txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt4": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  }
}
 skins['contactform.OverlappingButtonSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0px 0px rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtError": {
    "type": "TEXT_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "brw2": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.contactform.BasicContactFormSkin'] = {
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#a9a9a9",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.contactform.DefaultContactForm'] = {
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#a9a9a9",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.contactform.HorizontalContactFormSkin'] = {
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#a9a9a9",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.contactform.VerticalForm'] = {
  "txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.contactform.VerticalFormLabelsLeft'] = {
  "txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['platform.components.skins.controllerIconAndNameSkin'] = {}
 skins['platform.components.skins.controllerSkin'] = {}
 skins['wysiwyg.viewer.skins.DayDefaultSkin'] = {
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.MonthDefaultSkin'] = {
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.CalendarDefaultSkin'] = {
  "shd-calendar": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd-calendar": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg-calendar": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brw-calendar": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd-calendar": {
    "type": "BORDER_COLOR",
    "defaultValue": "#aeaeae",
    "state": "regular"
  },
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt-family-header": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-header": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt-size-header": {
    "type": "TEXT_SIZE",
    "defaultValue": "18px",
    "state": "regular"
  },
  "bg-header": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.CalendarTextBetweenNavSkin'] = {
  "shd-calendar": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd-calendar": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg-calendar": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brw-calendar": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd-calendar": {
    "type": "BORDER_COLOR",
    "defaultValue": "#aeaeae",
    "state": "regular"
  },
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt-family-header": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-header": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt-size-header": {
    "type": "TEXT_SIZE",
    "defaultValue": "18px",
    "state": "regular"
  },
  "bg-header": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.CalendarTextYearNavSkin'] = {
  "shd-calendar": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd-calendar": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg-calendar": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brw-calendar": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd-calendar": {
    "type": "BORDER_COLOR",
    "defaultValue": "#aeaeae",
    "state": "regular"
  },
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt-family-header": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-header": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "bg-header": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "regular"
  },
  "txt-size-header": {
    "type": "TEXT_SIZE",
    "defaultValue": "18px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.DatePickerDefaultSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "regular"
  },
  "brwe": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "error"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#f60419",
    "state": "error"
  },
  "brwd": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brwf": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "focus"
  },
  "brwh": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "hover"
  },
  "icn-color": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txt-placeholder": {
    "type": "TEXT_COLOR",
    "defaultValue": "#A9A9A9",
    "state": "regular"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "shd-calendar": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd-calendar": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg-calendar": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brw-calendar": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd-calendar": {
    "type": "BORDER_COLOR",
    "defaultValue": "#aeaeae",
    "state": "regular"
  },
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt-family-header": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-header": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt-size-header": {
    "type": "TEXT_SIZE",
    "defaultValue": "18px",
    "state": "regular"
  },
  "bg-header": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.DatePickerTextBetweenNavSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "regular"
  },
  "brwe": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "error"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#f60419",
    "state": "error"
  },
  "brwd": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brwf": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "focus"
  },
  "brwh": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "hover"
  },
  "icn-color": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txt-placeholder": {
    "type": "TEXT_COLOR",
    "defaultValue": "#A9A9A9",
    "state": "regular"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "shd-calendar": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd-calendar": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg-calendar": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brw-calendar": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd-calendar": {
    "type": "BORDER_COLOR",
    "defaultValue": "#aeaeae",
    "state": "regular"
  },
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt-family-header": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-header": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt-size-header": {
    "type": "TEXT_SIZE",
    "defaultValue": "18px",
    "state": "regular"
  },
  "bg-header": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.DatePickerTextYearNavSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "regular"
  },
  "brwe": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "error"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#f60419",
    "state": "error"
  },
  "brwd": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brwf": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "focus"
  },
  "brwh": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "hover"
  },
  "icn-color": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#cacaca",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txt-placeholder": {
    "type": "TEXT_COLOR",
    "defaultValue": "#A9A9A9",
    "state": "regular"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "shd-calendar": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd-calendar": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg-calendar": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "brw-calendar": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd-calendar": {
    "type": "BORDER_COLOR",
    "defaultValue": "#aeaeae",
    "state": "regular"
  },
  "fnt-family-day": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-size-day": {
    "type": "TEXT_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  },
  "txt-day": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "bg-day-selected": {
    "type": "COLOR",
    "defaultValue": "#7343d1",
    "state": "hover"
  },
  "txt-day-selected": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd-day-selected": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt-family-header": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "txt-header": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "bg-header": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#7343d1",
    "state": "regular"
  },
  "txt-size-header": {
    "type": "TEXT_SIZE",
    "defaultValue": "18px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.InputWithValidationSkin'] = {
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.enterPasswordDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.notificationDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.emailVerificationDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "defClr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "ttlFnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "cntFnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "ftrFnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "lnkClr": {
    "type": "COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.memberLoginDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.noPermissionsToPageMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "ttlFnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "defClr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "btnFnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "cntFnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.requestPasswordResetDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.resetPasswordDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.sentConfirmationEmailMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "defClr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "ttlFnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "cntFnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "ftrFnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "lnkClr": {
    "type": "COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.signUpDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.welcomeDialogSkinMaterial'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_2",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "brd2": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "btn_txt": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd_h": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txt2": {
    "type": "COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "ttlFnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "defClr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "cntFnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "btnFnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['wysiwyg.viewer.skins.dialogs.siteMembersDialogs.welcomeDialogSkinNew'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "secondary-color": {
    "type": "COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bg-clr": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "headingL": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "ttlFnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "defClr": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "cntFnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "btnFnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_5",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  }
}
 skins['skins.viewer.displayers.SlideIronDisplayer'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.4) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.701961) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 0px 5px 0px inset",
    "state": "regular"
  },
  "imageWrapperTop": {
    "type": "TOP_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "imageWrapperRight": {
    "type": "RIGHT_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "imageWrapperBottom": {
    "type": "BOTTOM_SIZE",
    "defaultValue": "140px",
    "state": "regular"
  },
  "imageWrapperLeft": {
    "type": "LEFT_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['skins.viewer.displayers.SlideScotchTapeDisplayer'] = {
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.gallerymatrix.MatrixDisplayerIronSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.59) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.92) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 0px 5px 0px inset",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['skins.viewer.gallerymatrix.MatrixDisplayerScotchTapeSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "8px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.matrixgallery.viewer.skins.MatrixDisplayerSeparateTextBoxSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bghClr": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "ttl2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "lnkClr": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "boxRd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "imgHeightDiff": {
    "type": "MARGIN_SIZE",
    "defaultValue": "80px",
    "state": "regular"
  },
  "boxbg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "topPadding": {
    "type": "SIZE",
    "defaultValue": "13px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.matrixgallery.viewer.skins.MatrixDisplayerTextOnCenterSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "borderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgHover": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "descColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "linkColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linkHoverColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SlideShowDisplayerLiftedShadowSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SlideShowPolaroidDisplayer'] = {
  "brw": {
    "type": "SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SlideShowSloopyDisplayer'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SlideShowTextBottomDisplayer'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SlideTextFloatingDisplayer'] = {
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "s2": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SlideTextOverlayDisplayer'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.SlideTextRightDisplayer'] = {
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.BlogMatrixDisplayer'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerCircleSkin'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerDefaultSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerLiftedShadow'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerPolaroidSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerSloopy'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTextBelowSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTextSlideUpSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "9px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "paddingTop": {
    "type": "SIZE",
    "defaultValue": "9px",
    "state": "regular"
  },
  "paddingLeft": {
    "type": "SIZE",
    "defaultValue": "9px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTransparentSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brdTrans": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "ttlTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fntdsTrans": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txtTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "ttlhTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txthTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.PolaroidDisplayerCustomHeightSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "imagePadding": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "imgHeightDiff": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "80px",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "lnk": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "paddingTop": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "paddingBottom": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.TextBottomDisplayerCustomHeightSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "lnk": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "imgHeightDiff": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "80px",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "paddingTop": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "paddingBottom": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.disquscomments.viewer.skins.DisqusCommentsSkin'] = {}
 skins['skins.viewer.documentmedia.DocumentMediaSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.EbayItemsBySellerSkin'] = {}
 skins['wysiwyg.common.components.exitmobilemode.viewer.skins.ExitMobileModeSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "clr": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.ExpandableMenuSkin'] = {
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "arrowColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgsSub": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtsSub": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bgexpanded": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntSubMenu": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txtexpanded": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "subMenuSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "menuSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['skins.core.FacebookCommentSkin'] = {}
 skins['skins.core.FacebookLikeSkin'] = {}
 skins['wysiwyg.common.components.facebooklikebox.viewer.skins.FacebookLikeBoxSkin'] = {}
 skins['skins.viewer.facebookshare.FacebookShareSkin'] = {}
 skins['wysiwyg.viewer.skins.UploadNameDefaultSkin'] = {
  "x_file_txt_h": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "file_bg_h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "hover"
  },
  "x_file_txt_e": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "error"
  },
  "x_file_txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "x_file_txt_f": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "focus"
  },
  "x_file_txt_d": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "disabled"
  },
  "file_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.FileUploaderDefaultSkin'] = {
  "btn_bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "btn_brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "btn_brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "btn_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "btn_shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "btn_txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "btn_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "btn_bg_h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "btn_brd_h": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "btn_brw_h": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "hover"
  },
  "btn_txt_h": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "bg_f": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "brd_f": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "focus"
  },
  "brw_f": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "focus"
  },
  "txt_f": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_28",
    "state": "focus"
  },
  "bg_d": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "disabled"
  },
  "brd_d": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "disabled"
  },
  "brw_d": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "txt_d": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "disabled"
  },
  "bg_e": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "error"
  },
  "brd_e": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "error"
  },
  "brw_e": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "error"
  },
  "txt_e": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "error"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "x_file_txt_h": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "file_bg_h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "hover"
  },
  "x_file_txt_e": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "error"
  },
  "x_file_txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "x_file_txt_f": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "focus"
  },
  "x_file_txt_d": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "disabled"
  },
  "file_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.FlashComponentSkin'] = {}
 skins['wysiwyg.viewer.skins.FlickrBadgeWidgetSkin'] = {}
 skins['wysiwyg.viewer.skins.GoogleMapSkin'] = {}
 skins['wysiwyg.viewer.skins.map.GoogleMapDefault'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.map.GoogleMapLiftedShadow'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.map.GoogleMapSloppy'] = {}
 skins['wysiwyg.viewer.skins.GridLeftHeaderSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "containerBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "containerBrd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "containerBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "headerDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "headerBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "headerText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "headerFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "columnDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "columnDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "headerDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "row2Bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_10",
    "state": "regular"
  },
  "rowBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "rowText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "rowFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rowDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "rowDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "selection": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "linkHoverColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_7",
    "state": "hover"
  },
  "paginationColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "cellPadding": {
    "type": "PADDING_RIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rowOrCellHoverBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "hover"
  },
  "headerColumnBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "headerColumnFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "headerColumnText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.GridRightHeaderSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "containerBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "containerBrd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "containerBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "headerDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "headerBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "headerText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "headerFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "columnDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "columnDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "headerDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "row2Bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_10",
    "state": "regular"
  },
  "rowBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "rowText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "rowFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rowDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "rowDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "selection": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "linkHoverColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_7",
    "state": "hover"
  },
  "paginationColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "cellPadding": {
    "type": "PADDING_RIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rowOrCellHoverBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "hover"
  },
  "headerColumnBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "headerColumnFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "headerColumnText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.GridSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "containerBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "containerBrd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "containerBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "headerDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "headerBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "headerText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "headerFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "columnDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "columnDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "headerDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "row2Bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_10",
    "state": "regular"
  },
  "rowBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "rowText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "rowFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rowDivider_w": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "rowDivider": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "selection": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "linkColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "linkHoverColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_7",
    "state": "hover"
  },
  "paginationColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "cellPadding": {
    "type": "PADDING_RIGHT_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rowOrCellHoverBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.HtmlComponentSkin'] = {}
 skins['skins.viewer.VectorImageShapeBasicSkin'] = {
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.IconSkin'] = {
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.imagebutton.viewer.skins.ImageButtonSkin'] = {}
 skins['wysiwyg.skins.ImageZoomDisplayerSkin'] = {}
 skins['wysiwyg.viewer.skins.MediaZoomSkin'] = {}
 skins['wysiwyg.skins.ImageZoomSkin'] = {}
 skins['wysiwyg.viewer.skins.NonOptimizedMediaZoomSkin'] = {}
 skins['wysiwyg.skins.NonOptimizedImageZoomSkin'] = {}
 skins['wysiwyg.viewer.skins.AppPartMediaZoomSkin'] = {}
 skins['wysiwyg.viewer.skins.AppPartMobileMediaZoomSkin'] = {
  "zoom": {
    "type": "INVERTED_ZOOM_FIXED",
    "defaultValue": "1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TouchMediaZoomItem'] = {}
 skins['wysiwyg.viewer.skins.TouchMediaZoom'] = {}
 skins['wysiwyg.viewer.skins.inlinePopup.DefaultInlinePopup'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin1'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin10'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin11'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin12'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin13'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin14'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin15'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin16'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin2'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin3'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin4'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin5'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin6'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin7'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin8'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.inlinePopupToggle.inlinePopupToggleSkin9'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rdOpen": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shdOpen": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderwidthOpen": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bordercolorOpen": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "lineColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "lineColorOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['skins.viewer.itunesbutton.ItunesButtonSkin'] = {}
 skins['wysiwyg.viewer.skins.LanguageButtonSkin'] = {
  "itemFont": {
    "type": "FONT",
    "defaultValue": "font_0",
    "state": "regular"
  },
  "itemTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "backgroundColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "regular"
  },
  "itemTextColorHover": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "backgroundColorHover": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "hover"
  },
  "itemTextColorActive": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "active"
  },
  "backgroundColorActive": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "active"
  }
}
 skins['wysiwyg.viewer.skins.LanguageSelectorSkin'] = {
  "borderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#202020",
    "state": "regular"
  },
  "borderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "separatorColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#fefefe",
    "state": "regular"
  },
  "backgroundColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "regular"
  },
  "itemFont": {
    "type": "FONT",
    "defaultValue": "font_0",
    "state": "regular"
  },
  "itemTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "itemTextColorHover": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "backgroundColorHover": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "hover"
  },
  "itemTextColorActive": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "active"
  },
  "backgroundColorActive": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "active"
  }
}
 skins['wysiwyg.viewer.skins.displayers.LinkBarItemNoBGSkin'] = {}
 skins['wysiwyg.viewer.skins.displayers.LinkBarItemSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "100%",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.LinkBarNoBGSkin'] = {}
 skins['wysiwyg.viewer.skins.button.LoginButtonSkin'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.LoginSocialButtonSkin'] = {
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.LoginSocialBarSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "bg-dd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw-dd": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd-dd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "rd-dd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0px",
    "state": "regular"
  },
  "shd-dd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "fnt-size-dd": {
    "type": "TEXT_SIZE",
    "defaultValue": "15px",
    "state": "regular"
  },
  "txt-dd": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt-slct-dd": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txth-dd": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_17",
    "state": "hover"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['skins.viewer.gallerymatrix.MatrixGalleryIronSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 5px rgba(0, 0, 0, 0.53)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.59) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.92) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 0px 5px 0px inset",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['skins.viewer.gallerymatrix.MatrixGalleryScotchTapeSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "8px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.matrixgallery.viewer.skins.MatrixGallerySeparateTextBoxSkin'] = {
  "showMoreClr": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bghClr": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "ttl2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lnkClr": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "boxRd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "imgHeightDiff": {
    "type": "MARGIN_SIZE",
    "defaultValue": "80px",
    "state": "regular"
  },
  "boxbg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "topPadding": {
    "type": "SIZE",
    "defaultValue": "13px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.matrixgallery.viewer.skins.MatrixGalleryTextOnCenterSkin'] = {
  "showMoreColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "borderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgHover": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "descColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linkColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linkHoverColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.displayers.CircleDetailedDisplayer'] = {
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.PolaroidDisplayer'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.CircleMatrixGallery'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "50%",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.MatrixGallerySkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.PolaroidMatrixGallery'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.BlogMatrixGallery'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerVintage'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 5px rgba(0, 0, 0, 0.1)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryCircleSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryDefaultSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryLiftedShadow'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryPolaroidSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGallerySloopy'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTextBelowSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTextSlideUpSkin'] = {
  "showMoreColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "9px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "paddingTop": {
    "type": "SIZE",
    "defaultValue": "9px",
    "state": "regular"
  },
  "paddingLeft": {
    "type": "SIZE",
    "defaultValue": "9px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTransparentSkin'] = {
  "showMoreColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fntdsTrans": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "brdTrans": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "ttlTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txtTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "ttlhTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txthTrans": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryVintage'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 5px rgba(0, 0, 0, 0.1)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "PADDING_SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.PolaroidCustomHeightSkin'] = {
  "showMoreColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "imagePadding": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "imgHeightDiff": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "80px",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "lnk": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "paddingTop": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "paddingBottom": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallerymatrix.TextBottomCustomHeightSkin'] = {
  "showMoreColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "ttl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "lnk": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "imgHeightDiff": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "80px",
    "state": "regular"
  },
  "paddingSize": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "paddingTop": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "paddingBottom": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.VectorImageSkin'] = {}
 skins['skins.viewer.mediaControlFullscreenDefaultSkin'] = {}
 skins['skins.viewer.mediaControlPlayDefaultSkin'] = {}
 skins['skins.viewer.mediaControlStoryboardDefaultSkin'] = {
  "maincolor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaControlStoryboardMinimalSkin'] = {
  "textcolor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaControlProgressDefaultSkin'] = {
  "maincolor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "buffercolor": {
    "type": "COLOR",
    "defaultValue": "#f80",
    "state": "regular"
  },
  "progresscolor": {
    "type": "COLOR",
    "defaultValue": "#f00",
    "state": "regular"
  },
  "textcolor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaControlVolumeDefaultSkin'] = {
  "maincolor": {
    "type": "COLOR",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "progresscolor": {
    "type": "COLOR",
    "defaultValue": "#1fdf67",
    "state": "regular"
  },
  "disabledcolor": {
    "type": "COLOR",
    "defaultValue": "#777",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaControlTimeDefaultSkin'] = {
  "maincolor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaControlsDarkSkin'] = {
  "maincolor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "progresscolor": {
    "type": "COLOR",
    "defaultValue": "#f00",
    "state": "regular"
  },
  "disabledcolor": {
    "type": "COLOR",
    "defaultValue": "#777",
    "state": "regular"
  },
  "buffercolor": {
    "type": "COLOR",
    "defaultValue": "#f80",
    "state": "regular"
  },
  "textcolor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaControlsLightSkin'] = {
  "maincolor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "progresscolor": {
    "type": "COLOR",
    "defaultValue": "#f00",
    "state": "regular"
  },
  "disabledcolor": {
    "type": "COLOR",
    "defaultValue": "#777",
    "state": "regular"
  },
  "buffercolor": {
    "type": "COLOR",
    "defaultValue": "#f80",
    "state": "regular"
  },
  "textcolor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaControlsNoControlsSkin'] = {
  "maincolor": {
    "type": "COLOR",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "progresscolor": {
    "type": "COLOR",
    "defaultValue": "#1fdf67",
    "state": "regular"
  },
  "disabledcolor": {
    "type": "COLOR",
    "defaultValue": "#777",
    "state": "regular"
  }
}
 skins['skins.viewer.mediaOverlayControlsDefaultSkin'] = {}
 skins['wysiwyg.viewer.skins.mediaPlayerSkin'] = {}
 skins['wysiwyg.viewer.skins.MessageViewSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "borderColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#5b8fa7",
    "state": "regular"
  },
  "bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#2aa7ea",
    "state": "regular"
  },
  "borderColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#237aa7",
    "state": "hover"
  },
  "bgColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#179ce1",
    "state": "hover"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.2",
    "state": "hover"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "68, 175, 233, 0.7",
    "state": "hover"
  },
  "labelColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.MobileMessageViewSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "borderColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#5b8fa7",
    "state": "regular"
  },
  "bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#2aa7ea",
    "state": "regular"
  },
  "borderColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#237aa7",
    "state": "hover"
  },
  "bgColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#179ce1",
    "state": "hover"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.2",
    "state": "hover"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "68, 175, 233, 0.7",
    "state": "hover"
  },
  "labelColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.MobileActionsMenuSkin'] = {}
 skins['wysiwyg.viewer.skins.PayPalButtonSkin'] = {
  "clr": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.pinitpinwidget.viewer.skins.PinItPinWidgetSkin'] = {}
 skins['skins.viewer.pinterestfollow.PinterestFollowSkin'] = {}
 skins['skins.viewer.pinterestpin.PinterestPinSkin'] = {}
 skins['wysiwyg.common.components.pinterestpinit.viewer.skins.PinterestPinItSkin'] = {}
 skins['wysiwyg.viewer.skins.quickActionBar.anchoredSkin'] = {
  "colorScheme": {
    "type": "COLOR_SCHEME",
    "defaultValue": "BRAND",
    "state": "regular"
  },
  "actionsSHD": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "actionsBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "actionsBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "rgba(255, 255, 255, 0)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.quickActionBar.floatingSkin'] = {
  "colorScheme": {
    "type": "COLOR_SCHEME",
    "defaultValue": "BRAND",
    "state": "regular"
  },
  "controlButtonBG": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fff",
    "state": "regular"
  },
  "controlButtonFG": {
    "type": "TEXT_COLOR",
    "defaultValue": "#4682b4",
    "state": "regular"
  },
  "controlButtonBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "controlButtonBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "rgba(255, 255, 255, 0)",
    "state": "regular"
  },
  "controlButtonSHD": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "actionsSHD": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "actionsBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "actionsBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "rgba(255, 255, 255, 0)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.quickActionBar.ovalSkin'] = {
  "colorScheme": {
    "type": "COLOR_SCHEME",
    "defaultValue": "BRAND",
    "state": "regular"
  },
  "actionsSHD": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "actionsBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "actionsBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "rgba(255, 255, 255, 0)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.quickActionBar.rectSkin'] = {
  "colorScheme": {
    "type": "COLOR_SCHEME",
    "defaultValue": "BRAND",
    "state": "regular"
  },
  "actionsSHD": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "actionsBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "actionsBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "rgba(255, 255, 255, 0)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.quickActionBarItem'] = {}
 skins['wysiwyg.common.components.radio.viewer.skins.RadioButtonDefaultSkin'] = {
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "error"
  },
  "bg3e": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "error"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "bg3d": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "disabled"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg3": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0px 0px rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "border_color_focus": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCC",
    "state": "regular"
  },
  "border_width_focus": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bg3h": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "hover"
  },
  "brwh": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "hover"
  },
  "bg2h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['skins.input.RadioGroupDefaultSkin'] = {
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "error"
  },
  "bg3e": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "error"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "bg3d": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "disabled"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg3": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0px 0px rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "border_color_focus": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCC",
    "state": "regular"
  },
  "border_width_focus": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bg3h": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "hover"
  },
  "brwh": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "hover"
  },
  "bg2h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.rssbutton.viewer.skins.RSSButtonSkin'] = {}
 skins['wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerFramedPlay'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "audioIcons": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  },
  "dividers": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "audioText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "fnts": {
    "type": "FONT",
    "defaultValue": "font_10",
    "state": "regular"
  },
  "vol": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "prog": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerLargePlay'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "audioIcons": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  },
  "audioText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "dividers": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnts": {
    "type": "FONT",
    "defaultValue": "font_10",
    "state": "regular"
  },
  "vol": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "prog": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerRoundPlay'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "audioIcons": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  },
  "audioText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "fnts": {
    "type": "FONT",
    "defaultValue": "font_10",
    "state": "regular"
  },
  "vol": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "prog": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.singleaudioplayer.viewer.skins.SingleAudioPlayerSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "audioIcons": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  },
  "audioText": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "fnts": {
    "type": "FONT",
    "defaultValue": "font_10",
    "state": "regular"
  },
  "vol": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "prog": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.skypecallbutton.viewer.skins.SkypeCallButtonSkin'] = {}
 skins['skins.viewer.displayers.BlogSlideshowDisplayer'] = {
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.displayers.SlideCleanAndSimple2Displayer'] = {
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.displayers.SlideCleanAndSimpleDisplayer'] = {
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.gallery.BlogSlideShow'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "abgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.gallery.SlideShowCleanAndSimple'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "abg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "abgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.gallery.SlideShowCleanAndSimple2'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "abg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "abgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.gallery.SlideShowIron'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "ishdd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.4) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.701961) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 0px 5px 0px inset, rgba(0, 0, 0, 0.498039) 0px 1px 3px 0px",
    "state": "regular"
  },
  "abg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "ishd": {
    "type": "BOX_SHADOW",
    "defaultValue": "rgba(255, 255, 255, 0.4) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.701961) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 0px 5px 0px inset",
    "state": "regular"
  },
  "imageWrapperTop": {
    "type": "TOP_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "imageWrapperRight": {
    "type": "RIGHT_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "imageWrapperBottom": {
    "type": "BOTTOM_SIZE",
    "defaultValue": "140px",
    "state": "regular"
  },
  "imageWrapperLeft": {
    "type": "LEFT_SIZE",
    "defaultValue": "12px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['skins.viewer.gallery.SlideShowScotchTape'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 0 rgba(0, 0, 0, 0.1)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.FrameDisplayer'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.displayers.RoundFrameDisplayer'] = {}
 skins['wysiwyg.viewer.skins.displayers.SlideDisplayer'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.FrameShowGallery'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 2px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd1": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0 5px 5px 0",
    "state": "regular"
  },
  "rd2": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px 0 0 5px",
    "state": "regular"
  },
  "clr": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.RibbonsSlideShow'] = {
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 2px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "bgc1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "clr": {
    "type": "COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.RoundSlideShowGallery'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "shd1": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset -3px -5px 15px rgba(0, 0, 0, 0.4)",
    "state": "regular"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowGalleryLiftedShadowSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowGallerySimple'] = {
  "clr": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowGallerySloopy'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowPolaroid'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "5px",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowTextBottom'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowTextFloating'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "s": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "s2": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowTextOverlay'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.gallery.SlideShowTextRight'] = {
  "brd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "a": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgc": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fntt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "fntds": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.SoundCloudWidgetSkin'] = {}
 skins['wysiwyg.common.components.spotifyfollow.viewer.skins.SpotifyFollowSkin'] = {}
 skins['wysiwyg.common.components.spotifyplayer.viewer.skins.SpotifyPlayerSkin'] = {}
 skins['wysiwyg.common.components.boxSlideShow.viewer.skins.longArrowsLargeSelectedCircleSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.boxSlideShow.viewer.skins.squareButtonsSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "dotsSelectedColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "arrowContainerColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.boxSlideShow.viewer.skins.thinArrowsLargeSelectedCircleSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.boxSlideShow.viewer.skins.thinArrowsSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "dotsSelectedColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.statebox.viewer.skins.StateBoxSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.statebox.viewer.skins.StateStripSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.stripSlideShow.viewer.skins.longArrowsLargeSelectedCircleSkin'] = {
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.stripSlideShow.viewer.skins.squareButtonsSkin'] = {
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "dotsSelectedColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "arrowContainerColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.stripSlideShow.viewer.skins.thinArrowsLargeSelectedCircleSkin'] = {
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.stripSlideShow.viewer.skins.thinArrowsSkin'] = {
  "dotsColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "dotsSelectedColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "arrowColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.stripSlideShowSlide.viewer.skins.stripSlideShowSlideSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormBoxLayoutEnvelope'] = {
  "bg3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormBoxLayoutFlat'] = {
  "bg3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormBoxLayoutShiny'] = {
  "bls_bg3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "bls_shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 1px 0 rgba(50, 50, 50, 0.2)",
    "state": "regular"
  },
  "bls_tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "bls_titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bls_shd_input": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 1px 1px 0 1px rgba(50, 50, 50, 0.2)",
    "state": "regular"
  },
  "bls_txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bls_bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bls_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "bls_brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bls_brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "bls_txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "bls_labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "bls_shd_subscribe_button": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 -15px 5px 0 rgba(50, 50, 50, 0.4)",
    "state": "regular"
  },
  "bls_txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bls_fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "bls_bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "bls_txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bls_bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "bls_efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "bls_txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "bls_shd_input_rtl": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset -1px 1px 1px 0 rgba(50, 50, 50, 0.75)",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormLineLayoutFlat'] = {
  "llf_bg3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "llf_shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "llf_fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "llf_txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "llf_brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "llf_bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "llf_txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "llf_bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "llf_tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "llf_titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "llf_txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "llf_bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "llf_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "llf_brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "llf_labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "llf_txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "llf_efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "llf_txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormLineLayoutTransparentWithIcon'] = {
  "llf_bg3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "llf_brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "llf_shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "llf_fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "llf_txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "llf_brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "llf_bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "llf_txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "llf_bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "llf_icon_color": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "llf_tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "llf_titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "llf_txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "llf_bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "llf_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "llf_labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "llf_txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "llf_efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "llf_txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormPlaceholderSkin'] = {
  "tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "phs_txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "phs_bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormSkin'] = {
  "fnt1": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#a9a9a9",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "bs_txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "bs_bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#a9a9a9",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormSkinTopLabels'] = {
  "fnt1": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "labelTxt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#a9a9a9",
    "state": "regular"
  },
  "efnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txtSuccess": {
    "type": "TEXT_COLOR",
    "defaultValue": "#bada55",
    "state": "regular"
  },
  "txtError": {
    "type": "BORDER_COLOR",
    "defaultValue": "#8b0000",
    "state": "regular"
  },
  "tl_txt3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "tl_bg4": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "tfnt": {
    "type": "FONT",
    "defaultValue": "font_6",
    "state": "regular"
  },
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#a9a9a9",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "txt1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  },
  "fnt2": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bg1": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "maxbrw": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  }
}
 skins['skins.viewer.svgPrimitive.SvgPrimitiveDefaultSkin'] = {}
 skins['skins.viewer.svgshape.SvgShapeDefaultSkin'] = {
  "fillcolor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "alpha-fillcolor": {
    "type": "ALPHA",
    "defaultValue": "1",
    "state": "regular"
  },
  "stroke": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "strokewidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.table.TableComponentDefaultSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 3px rgba(0, 0, 0, 0.5)",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "hover"
  }
}
 skins['TextAreaDefaultSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "brwh": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "hover"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "hover"
  },
  "bgd": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#CCCCCC",
    "state": "disabled"
  },
  "txtd": {
    "type": "TEXT_COLOR",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  },
  "brwd": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "brdd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "disabled"
  },
  "brwf": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "focus"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "focus"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "focus"
  },
  "brwe": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "error"
  },
  "bge": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "error"
  },
  "brde": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "error"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkin'] = {
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkinNoValidation'] = {
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.input.TextAreaInputSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "hover"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#19a0e9",
    "state": "focus"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.TinyMenuMemberSectionSkin'] = {
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.TinyMenuLanguageSectionSkin'] = {
  "txt": {
    "type": "TEXT_COLOR_LEGACY_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "20px",
    "state": "regular"
  },
  "strokewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "iconcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "iconcolorSelected": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderColorSelected": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR_LEGACY_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "separatorHeight": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "separatorColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "borderWidthSelected": {
    "type": "BORDER_SIZE",
    "defaultValue": "0px",
    "state": "regular"
  },
  "textAlignment": {
    "type": "TEXT_ALIGNMENT",
    "defaultValue": "center",
    "state": "regular"
  },
  "separatorWidthFull": {
    "type": "BORDER_SIZE",
    "defaultValue": "200px",
    "state": "regular"
  },
  "fixStrokeBlur": {
    "type": "SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "counterColor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.TinyMenuPullFromLeftSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "20px",
    "state": "regular"
  },
  "strokewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "iconcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "iconcolorSelected": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderColorSelected": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR_LEGACY_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "separatorHeight": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "separatorColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderWidthSelected": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "textAlignment": {
    "type": "TEXT_ALIGNMENT",
    "defaultValue": "left",
    "state": "regular"
  },
  "separatorWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "140px",
    "state": "regular"
  },
  "fixStrokeBlur": {
    "type": "SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "counterColor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.TinyMenuPullFromRightSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "20px",
    "state": "regular"
  },
  "strokewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "iconcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "iconcolorSelected": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderColorSelected": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR_LEGACY_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "separatorHeight": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "separatorColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderWidthSelected": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "textAlignment": {
    "type": "TEXT_ALIGNMENT",
    "defaultValue": "right",
    "state": "regular"
  },
  "separatorWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "140px",
    "state": "regular"
  },
  "fixStrokeBlur": {
    "type": "SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "counterColor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.TinyMenuPullFromTopSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "20px",
    "state": "regular"
  },
  "strokewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "iconcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "iconcolorSelected": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderColorSelected": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR_LEGACY_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "separatorHeight": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "separatorColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgOpen": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "borderWidthSelected": {
    "type": "BORDER_SIZE",
    "defaultValue": "0px",
    "state": "regular"
  },
  "textAlignment": {
    "type": "TEXT_ALIGNMENT",
    "defaultValue": "center",
    "state": "regular"
  },
  "separatorWidthFull": {
    "type": "BORDER_SIZE",
    "defaultValue": "200px",
    "state": "regular"
  },
  "fixStrokeBlur": {
    "type": "SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "counterColor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.mobile.TinyMenuSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderwidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "linewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "20px",
    "state": "regular"
  },
  "strokewidth": {
    "type": "WIDTH_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "iconcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "iconcolorSelected": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR_LEGACY_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR_LEGACY_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fixStrokeBlur": {
    "type": "SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "counterColor": {
    "type": "COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "badge-bg": {
    "type": "COLOR",
    "defaultValue": "#E21C21",
    "state": "regular"
  },
  "badge-txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fillcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAModalSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAPopupSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "4px 4px 15px rgba(0, 0, 0, 0.4)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAPreloaderSkin'] = {}
 skins['wysiwyg.viewer.skins.TPAUnavailableMessageOverlaySkin'] = {}
 skins['wysiwyg.viewer.skins.TPASectionSkin'] = {}
 skins['wysiwyg.viewer.skins.TPAWidgetNativeDeadcompSkin'] = {}
 skins['wysiwyg.viewer.skins.TPAWidgetNativeSkin'] = {}
 skins['wysiwyg.viewer.skins.TPAWidgetSkin'] = {}
 skins['wysiwyg.viewer.skins.TPA3DCarouselSkin'] = {}
 skins['wysiwyg.viewer.skins.TPA3DGallerySkin'] = {}
 skins['wysiwyg.viewer.skins.TPAAccordionSkin'] = {
  "color1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "color3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "color4": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPACollageSkin'] = {
  "color1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "color2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "color3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAEcomGallerySkin'] = {}
 skins['wysiwyg.viewer.skins.TPAFreestyleSkin'] = {
  "color1": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAHoneycombSkin'] = {
  "color3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "color4": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAImpressSkin'] = {
  "color1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "color2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "color3": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_23",
    "state": "regular"
  },
  "color4": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_28",
    "state": "regular"
  },
  "color5": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_33",
    "state": "regular"
  },
  "color6": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_16",
    "state": "regular"
  },
  "color7": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "color8": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAMasonrySkin'] = {
  "color1": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "color2": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "color3": {
    "type": "BG_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "color4": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAStripShowcaseSkin'] = {}
 skins['wysiwyg.viewer.skins.TPAStripSlideshowSkin'] = {
  "color1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "color2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "color3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TPAThumbnailsSkin'] = {
  "color1": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "color2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "color3": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.TwitterFeedSkin'] = {
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuLinkedNoTextSkin'] = {
  "symbolColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "symbolColorSelected": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolSkin'] = {
  "symbolColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "symbolColorSelected": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithHiddenTextSkin'] = {
  "textFont": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "symbolColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "symbolColorSelected": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithTextSkin'] = {
  "textFont": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "symbolColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "symbolColorSelected": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "14px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuTextSkin'] = {
  "textFont": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "symbolColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "symbolColorSelected": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuArrowSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntDrop": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "rdTop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "rd",
    "state": "regular"
  },
  "rdBottom": {
    "type": "BORDER_RADIUS",
    "defaultValue": "rd",
    "state": "regular"
  },
  "dropDownRdTop": {
    "type": "BORDER_RADIUS",
    "defaultValue": "dropdownBR",
    "state": "regular"
  },
  "dropDownRdBottom": {
    "type": "BORDER_RADIUS",
    "defaultValue": "dropdownBR",
    "state": "regular"
  },
  "bgDrop": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "dropdownBR": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "dropdownMargin": {
    "type": "MARGIN_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "subItemAlterAlignPad": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuRibbonsSkin'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bgh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "SKINS_bgSubmenu": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "SKINS_submenuBR": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "SKINS_fntSubmenu": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "SKINS_submenuMargin": {
    "type": "MARGIN_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "SKINS_foldh": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "SKINS_folds": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "subItemAlterAlignPad": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuSeparatedButtonFixedWidthSkin'] = {
  "SKINS_submenuMargin": {
    "type": "MARGIN_SIZE",
    "defaultValue": "8px",
    "state": "regular"
  },
  "SKINS_fntSubmenu": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "SKINS_bgSubmenu": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "SKINS_submenuBR": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "separatorHeight": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "8",
    "state": "regular"
  },
  "subItemAlterAlignPad": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuSeparatedButtonSkin'] = {
  "SKINS_fntSubmenu": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "SKINS_bgSubmenu": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "SKINS_submenuBR": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "SKINS_submenuMargin": {
    "type": "MARGIN_SIZE",
    "defaultValue": "8px",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "separatorHeight": {
    "type": "HEIGHT_SIZE",
    "defaultValue": "8",
    "state": "regular"
  },
  "subItemAlterAlignPad": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuSolidColorSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "sepw": {
    "type": "BORDER_BOTTOM_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "sep": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "SKINS_submenuBR": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "SKINS_bgSubmenu": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "SKINS_fntSubmenu": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "SKINS_submenuMargin": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "subItemAlterAlignPad": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuTextSkin'] = {
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "SKINS_bgSubmenu": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "SKINS_fntSubmenu": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "SKINS_submenuMargin": {
    "type": "MARGIN_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "subItemAlterAlignPad": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuTextWithSeparatorsSkin'] = {
  "sepw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "textSpacing": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "bgs": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txts": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "SKINS_bgSubmenu": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6)",
    "state": "regular"
  },
  "SKINS_fntSubmenu": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "SKINS_submenuMargin": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "subItemAlterAlignPad": {
    "type": "SIZE",
    "defaultValue": "10px",
    "state": "regular"
  }
}
 skins['skins.viewer.vkshare.VKShareSkin'] = {}
 skins['skins.core.GooglePlusOneSkin'] = {}
 skins['wysiwyg.skins.AppPartZoomSkin'] = {}
 skins['wysiwyg.skins.MobileAppPartZoomSkin'] = {
  "zoom": {
    "type": "INVERTED_ZOOM_FIXED",
    "defaultValue": "1",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.LoadMoreButton'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileAddButton'] = {
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "#737373",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "shadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 -13px 20px -10px 0 rgba(0, 0, 0, 0.2)",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileAddCouponButton'] = {
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "#222222",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "300px",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileColorOptionSkin'] = {}
 skins['ecommerce.skins.mcom.MobileComboBoxSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#888888",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#888888",
    "state": "regular"
  },
  "bg2": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#aaaaaa",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileDeleteItemButton'] = {}
 skins['ecommerce.skins.mcom.MobileDropDownInputSkin2'] = {}
 skins['ecommerce.skins.mcom.MobileErasableTextInputSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#222222",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#aaa9a9",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileOptionsListInputSkin'] = {}
 skins['ecommerce.skins.mcom.MobilePaginatedGridDefaultSkin'] = {}
 skins['ecommerce.skins.mcom.MobileRemoveButton'] = {
  "txt": {
    "type": "BORDER_COLOR",
    "defaultValue": "#373737",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "shadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 0 -13px 20px -10px 0 rgba(0, 0, 0, 0.2)",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileSelectableSliderGalleryDefaultSkin'] = {
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_13",
    "state": "hover"
  },
  "brs": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileSelectOptionsListSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileTextAreaInputSkin'] = {
  "txt": {
    "type": "COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3a0a1",
    "state": "regular"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#19a0e9",
    "state": "focus"
  }
}
 skins['ecommerce.skins.mcom.MobileTextOptionSkin'] = {}
 skins['ecommerce.skins.mcom.MobileVerticalRepeaterSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "pad": {
    "type": "PADDING_SIZE",
    "defaultValue": "10px 0",
    "state": "regular"
  }
}
 skins['ecommerce.skins.mcom.MobileZoomPartSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "7px",
    "state": "regular"
  }
}
 skins['ecommerce.skins.viewer.dialogs.EcomCheckoutMessageDialogSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0.2)",
    "state": "hover"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "rgba(204, 68, 233, 0.7)",
    "state": "hover"
  },
  "shadowInsetColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "rgba(0, 0, 0, 0.7)",
    "state": "active"
  }
}
 skins['wysiwyg.common.components.numericstepper.viewer.skins.NumericStepperHorizontalSkin'] = {
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "backgroundcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "textcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "buttonscolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "buttontextcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.numericstepper.viewer.skins.NumericStepperModernSkin'] = {
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "backgroundcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "textcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "buttonscolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "arrowscolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.numericstepper.viewer.skins.NumericStepperSimpleSkin'] = {
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "textcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "backgroundcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.common.components.numericstepper.viewer.skins.NumericStepperVerticalSkin'] = {
  "bordercolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "backgroundcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "textcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_13",
    "state": "regular"
  },
  "buttonscolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "arrowscolor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.EcomComboBoxInputSkin'] = {}
 skins['wysiwyg.viewer.skins.appinputs.EcomErasableTextInputSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.appinputs.EcomTextInputSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR",
    "defaultValue": "#a3d9f6",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "hover"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridNoBG'] = {
  "itemBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "itemBrc": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "itemBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "txtHoverOutOfStock": {
    "type": "TEXT_COLOR",
    "defaultValue": "228, 82, 63, 1",
    "state": "hover"
  },
  "paging": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridNoDetail'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "itemBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "itemBrc": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "itemBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "txtHoverOutOfStock": {
    "type": "TEXT_COLOR",
    "defaultValue": "228, 82, 63, 1",
    "state": "regular"
  },
  "paging": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.PaginatedGridSimple'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "itemBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "itemBrc": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "rbn": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "strip": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "txtHoverOutOfStock": {
    "type": "TEXT_COLOR",
    "defaultValue": "228, 82, 63, 1",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "hover"
  },
  "itemBrch": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "hover"
  },
  "paging": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.ClippedParagraphSkin'] = {}
 skins['wixapps.integration.skins.DropTargetSkin'] = {
  "$BorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.ecommerce.inputs.ComboBoxInputSkin'] = {}
 skins['wixapps.integration.skins.ecommerce.inputs.TextAreaInputSkin'] = {
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#e3e3e3",
    "state": "regular"
  },
  "brdh": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#a3d9f6",
    "state": "hover"
  },
  "brdf": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#19a0e9",
    "state": "focus"
  }
}
 skins['wixapps.integration.skins.ecommerce.options.ColorOptionSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, .6);",
    "state": "regular"
  },
  "txtcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#656565",
    "state": "regular"
  },
  "bgcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fffedf",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.ecommerce.options.OptionsListInputSkin'] = {}
 skins['wixapps.integration.skins.ecommerce.options.SelectOptionsListSkin'] = {}
 skins['wixapps.integration.skins.ecommerce.options.TextOptionSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "5px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, .6);",
    "state": "regular"
  },
  "txtcolor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#656565",
    "state": "regular"
  },
  "bgcolor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#fffedf",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.ecommerce.PaginatedGridSimple'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "itemBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "itemBrc": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "regular"
  },
  "rbn": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "regular"
  },
  "strip": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "itemBrch": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "paging": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.HelpQuestionMarkIconSkin'] = {}
 skins['wixapps.integration.skins.IconSkin'] = {}
 skins['wixapps.integration.skins.ImageButtonSkin'] = {}
 skins['wixapps.integration.skins.inputs.BUISelectorSkin'] = {}
 skins['wixapps.integration.skins.inputs.CheckBoxInputInlineSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#999999",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.inputs.CheckBoxInputSkin'] = {
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#aaaaaa",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.inputs.ComboBoxInputSkin'] = {
  "borderColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#c4c4c4",
    "state": "regular"
  },
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f9fafc",
    "state": "regular"
  },
  "borderColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#89a4af",
    "state": "hover"
  },
  "bgColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f2f3f5",
    "state": "hover"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.2",
    "state": "hover"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "255, 255, 255, 0.7",
    "state": "hover"
  }
}
 skins['wixapps.integration.skins.inputs.InlineTextInputSkin'] = {}
 skins['wixapps.integration.skins.inputs.LocationSelectorSkin'] = {}
 skins['wixapps.integration.skins.inputs.RichTextEditorSkin'] = {
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.1",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.inputs.SingleLineCheckBoxInputInlineSkin'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#999999",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  }
}
 skins['wysiwyg.editor.skins.buttons.ButtonSmallerSkin'] = {}
 skins['wixapps.integration.skins.inputs.SubmitInputMessageAboveButtonSkin'] = {
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "3px",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.1",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.inputs.TextInputWithIconSkin'] = {}
 skins['wixapps.integration.skins.inputs.TextLinkSkin'] = {}
 skins['wixapps.integration.skins.inputs.TimeInputSkin'] = {}
 skins['wixapps.integration.skins.LinkSelectorSkin'] = {}
 skins['wixapps.integration.skins.LinkSelectorSkinII'] = {}
 skins['wixapps.integration.skins.TextAreaSkin'] = {
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.3",
    "state": "regular"
  }
}
 skins['wixapps.integration.skins.ToggleSkin'] = {}
 skins['wixapps.integration.skins.ToggleSkin2'] = {}
 skins['wixapps.integration.skins.WixAppsButtonSkin'] = {
  "borderColor": {
    "type": "BORDER_COLOR",
    "defaultValue": "#c4c4c4",
    "state": "regular"
  },
  "$borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "4px",
    "state": "regular"
  },
  "bgColor": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f9fafc",
    "state": "regular"
  },
  "borderColorOver": {
    "type": "BORDER_COLOR",
    "defaultValue": "#89a4af",
    "state": "regular"
  },
  "bgColorOver": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f2f3f5",
    "state": "regular"
  },
  "shadowColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.2",
    "state": "regular"
  },
  "shadowInsetColorOver": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "255, 255, 255, 0.7",
    "state": "regular"
  },
  "bgColorPressed": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "#f3f3f3",
    "state": "regular"
  },
  "shadowInsetColor": {
    "type": "BOX_SHADOW_COLOR_ALPHA",
    "defaultValue": "0, 0, 0, 0.7",
    "state": "regular"
  },
  "labelColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#24a0c4",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.IconLeftImageButtonWithText'] = {}
 skins['wysiwyg.viewer.skins.paginatedgrid.counter.CounterGraphicSkin'] = {
  "insetShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.2)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.wixapps.PaginatedGridDefaultSkin'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "itemBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "1px 1px 1px rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "itemBrc": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "itemBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "paging": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.wixapps.PaginatedGridNoDetail'] = {
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "itemBg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "1px 1px 1px rgba(0, 0, 0, 0.15)",
    "state": "regular"
  },
  "itemBrc": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "itemBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_17",
    "state": "regular"
  },
  "paging": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.wixapps.PaginatedGridSimple'] = {
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "itemBrw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "itemBrc": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "regular"
  },
  "rbn": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "regular"
  },
  "strip": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "txth": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "itemBrch": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "paging": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.paginatedgrid.wixapps.TemplateChooserGallerySkin'] = {
  "insetShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.2)",
    "state": "regular"
  }
}
 skins['wysiwyg.viewer.skins.WixCodeWidgetSkin'] = {}
 skins['skins.core.TwitterFollowSkin'] = {}
 skins['skins.core.TwitterTweetSkin'] = {}
 skins['wysiwyg.common.components.youtubesubscribebutton.viewer.skins.YouTubeSubscribeButtonSkin'] = {}
 skins['wixui.skins.AddressInput'] = {
  "inputBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "10px",
    "state": "regular"
  },
  "inputBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 2px 0 0 #2cd8d7",
    "state": "regular"
  },
  "inputBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#f7f7f7",
    "state": "regular"
  },
  "inputStrokeColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#2cd8d7",
    "state": "regular"
  },
  "inputStrokeWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "inputFont": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "inputTextColor": {
    "type": "COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "inputHoverBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#fdf3f2",
    "state": "hover"
  },
  "inputHoverStrokeColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#2cd8d7",
    "state": "hover"
  },
  "inputHoverStrokeWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "hover"
  },
  "inputFocusBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "inputFocusStrokeColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#2cd8d7",
    "state": "regular"
  },
  "inputFocusStrokeWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "inputErrorBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "error"
  },
  "inputErrorStrokeColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#d0001b",
    "state": "error"
  },
  "inputErrorStrokeWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "error"
  },
  "inputDisabledBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "disabled"
  },
  "inputDisabledStrokeColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#9b9b9b",
    "state": "disabled"
  },
  "inputDisabledStrokeWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "disabled"
  },
  "inputDisabledTextColor": {
    "type": "COLOR",
    "defaultValue": "#9b9b9b",
    "state": "disabled"
  },
  "inputPlaceholderTextColor": {
    "type": "COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "dropdownBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#ffffff",
    "state": "regular"
  },
  "dropdownStrokeColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#2cd8d7",
    "state": "regular"
  },
  "dropdownStrokeWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "dropdownBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "dropdownFont": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "dropdownTextColor": {
    "type": "COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "dropdownHoverBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "rgba(44, 216, 215, .7)",
    "state": "regular"
  },
  "dropdownDividerStrokeColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#2cd8d7",
    "state": "regular"
  },
  "dropdownDividerStrokeWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  },
  "dropdownHoverTextColor": {
    "type": "COLOR",
    "defaultValue": "#9b9b9b",
    "state": "hover"
  },
  "dropdownLocationIconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#797979",
    "state": "regular"
  }
}
 skins['wixui.skins.BarChart'] = {
  "backgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "regular"
  },
  "color1": {
    "type": "COLOR",
    "defaultValue": "#308ddd",
    "state": "regular"
  },
  "hover1": {
    "type": "COLOR",
    "defaultValue": "#3899ec",
    "state": "hover"
  },
  "color2": {
    "type": "COLOR",
    "defaultValue": "#20455e",
    "state": "regular"
  },
  "hover2": {
    "type": "COLOR",
    "defaultValue": "#275473",
    "state": "hover"
  },
  "color3": {
    "type": "COLOR",
    "defaultValue": "#577083",
    "state": "regular"
  },
  "hover3": {
    "type": "COLOR",
    "defaultValue": "#7a92a5",
    "state": "hover"
  },
  "color4": {
    "type": "COLOR",
    "defaultValue": "#61ad5a",
    "state": "regular"
  },
  "hover4": {
    "type": "COLOR",
    "defaultValue": "#60bc57",
    "state": "hover"
  },
  "color5": {
    "type": "COLOR",
    "defaultValue": "#fdb10c",
    "state": "regular"
  },
  "hover5": {
    "type": "COLOR",
    "defaultValue": "#fac249",
    "state": "hover"
  },
  "color6": {
    "type": "COLOR",
    "defaultValue": "#d6453d",
    "state": "regular"
  },
  "hover6": {
    "type": "COLOR",
    "defaultValue": "#f66",
    "state": "hover"
  }
}
 skins['wixui.skins.Captcha'] = {}
 skins['wixui.skins.Dropdown'] = {
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_7",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "#888888",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZES",
    "defaultValue": "2px",
    "state": "regular"
  },
  "brd": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#F9F9F9",
    "state": "regular"
  },
  "rd": {
    "type": "MARGIN_SIZE",
    "defaultValue": "0px",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "txt2": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txt_placeholder": {
    "type": "TEXT_COLOR",
    "defaultValue": "#888888",
    "state": "regular"
  },
  "bgh": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "hover"
  },
  "bgf": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "focus"
  },
  "arrowColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_12",
    "state": "regular"
  },
  "txtlbl": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  }
}
 skins['wixui.skins.FileUploaderNew'] = {
  "btn_bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "btn_brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "btn_brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "btn_rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "btn_shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "btn_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "btn_txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "btn_bg_h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "btn_brd_h": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "btn_brw_h": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "hover"
  },
  "btn_txt_h": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "bg_f": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "focus"
  },
  "brd_f": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "focus"
  },
  "brw_f": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "focus"
  },
  "txt_f": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_28",
    "state": "focus"
  },
  "bg_d": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_18",
    "state": "disabled"
  },
  "brd_d": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "disabled"
  },
  "brw_d": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "txt_d": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "disabled"
  },
  "txt_e": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "error"
  },
  "bg_e": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_1",
    "state": "error"
  },
  "brd_e": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "error"
  },
  "brw_e": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "error"
  },
  "fntlbl": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "txtlbl": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "txtlblrq": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "x_file_txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "file_fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "x_file_txt_h": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  },
  "file_bg_h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_16",
    "state": "hover"
  },
  "x_file_txt_e": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "focus"
  },
  "x_file_txt_d": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "disabled"
  }
}
 skins['wixui.skins.LineShareButton'] = {}
 skins['wixui.skins.MusicPlayer'] = {
  "regularColor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "font": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "backgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "borderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "borderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "hoverColor": {
    "type": "COLOR",
    "defaultValue": "color_18",
    "state": "hover"
  },
  "backgroundColorIcon": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_19",
    "state": "regular"
  }
}
 skins['wixui.skins.Pagination'] = {
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "pageNumbersTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_6",
    "state": "regular"
  },
  "selectedPageTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_25",
    "state": "regular"
  },
  "selectedPageBG": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_22",
    "state": "regular"
  },
  "bRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "100px",
    "state": "regular"
  },
  "selectedPageBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "selectedPageBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_26",
    "state": "regular"
  },
  "shadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "navButtonBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "navButtonBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_32",
    "state": "regular"
  },
  "navButtonBG": {
    "type": "COLOR_ALPHA",
    "defaultValue": "transparent",
    "state": "regular"
  },
  "navButtonDisabledBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "disabled"
  },
  "navButtonDisabledBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_43",
    "state": "disabled"
  },
  "navButtonDisabledBG": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_27",
    "state": "disabled"
  },
  "arrowsDisabledColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_37",
    "state": "disabled"
  },
  "arrowsColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_32",
    "state": "regular"
  },
  "navButtonTextSize": {
    "type": "TEXT_SIZE",
    "defaultValue": "15px",
    "state": "regular"
  },
  "navButtonTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "navButtonDisabledTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_11",
    "state": "disabled"
  },
  "totalPagesTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_7",
    "state": "regular"
  },
  "pageInputBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "pageInputTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_26",
    "state": "regular"
  },
  "pageInputBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_27",
    "state": "regular"
  },
  "pageInputBG": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "regular"
  },
  "pageInputFocusBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "focus"
  },
  "pageInputFocusBG": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "focus"
  },
  "pageInputFocusBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_38",
    "state": "focus"
  },
  "pageInputErrorBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "error"
  },
  "pageInputErrorBG": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "error"
  },
  "pageInputErrorBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_22",
    "state": "error"
  }
}
 skins['wixui.skins.ProgressBar'] = {
  "borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0px",
    "state": "regular"
  },
  "boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, .6)",
    "state": "regular"
  },
  "borderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0px",
    "state": "regular"
  },
  "borderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "barBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "barForegroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_6",
    "state": "regular"
  }
}
 skins['wixui.skins.Rating'] = {
  "labelFont": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "labelFontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "errorLabelFontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_17",
    "state": "error"
  },
  "shapeBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_32",
    "state": "regular"
  },
  "shapeBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "emptyShapeColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "filledShapeColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_5",
    "state": "regular"
  },
  "errorShapeBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_37",
    "state": "error"
  },
  "errorShapeBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "7",
    "state": "error"
  },
  "errorFilledShapeColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_7",
    "state": "error"
  },
  "focusEmptyShapeColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#b0abba",
    "state": "regular"
  },
  "focusShapeBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "#b0abba",
    "state": "regular"
  },
  "focusShapeBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1",
    "state": "regular"
  }
}
 skins['wixui.skins.SearchBox'] = {
  "inputShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "inputBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "inputFont": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "inputTextColor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "inputBorderWidth": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "regular"
  },
  "inputBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "inputPlaceholderColor": {
    "type": "COLOR",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "inputIconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "inputHoverIconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "inputFocusIconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "focus"
  },
  "buttonBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  },
  "buttonHoverBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "buttonFocusBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "active"
  },
  "buttonIconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "buttonHoverIconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "buttonFocusIconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "active"
  },
  "inputBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "regular"
  },
  "inputHoverBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "hover"
  },
  "inputFocusBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_11",
    "state": "focus"
  },
  "inputHoverBorderWidth": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "hover"
  },
  "inputHoverBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "hover"
  },
  "inputFocusBorderWidth": {
    "type": "BORDER_SIZES",
    "defaultValue": "1px",
    "state": "focus"
  },
  "inputFocusBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "focus"
  },
  "suggestionSectionDividerColorNew": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_15",
    "state": "regular"
  }
}
 skins['wixui.skins.SelectionTagsList'] = {
  "ms": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "shd": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0 0 rgba(0, 0, 0, 0)",
    "state": "regular"
  },
  "fnt": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "txt": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "bg": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "pd": {
    "type": "SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brw": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "rd": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0",
    "state": "regular"
  },
  "txt_c": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "bg_c": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "brw_c": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "brd_c": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "txt_h": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "bg_h": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "hover"
  },
  "brw_h": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "hover"
  },
  "brd_h": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "hover"
  },
  "txt_e": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "error"
  },
  "bg_e": {
    "type": "BG_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "error"
  },
  "brw_e": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "error"
  },
  "brd_e": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "error"
  }
}
 skins['wixui.skins.SignatureInput'] = {
  "titleColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "titleFont": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "titleColorDisabled": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "disabled"
  },
  "titleFontDisabled": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "disabled"
  },
  "titleAsteriskColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "titleAsteriskColorDisabled": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_2",
    "state": "disabled"
  },
  "padBackground": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "padBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "padBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "padBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "padBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "12px",
    "state": "regular"
  },
  "padBorderColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "padBorderWidthHover": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "hover"
  },
  "padBackgroundHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "hover"
  },
  "padBorderColorFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "padBorderWidthFocus": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "padBackgroundFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "padBorderColorError": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "error"
  },
  "padBorderWidthError": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "error"
  },
  "padBackgroundError": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "error"
  },
  "padBorderColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "disabled"
  },
  "padBorderWidthDisabled": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "padBackgroundDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_8",
    "state": "disabled"
  },
  "padLineWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "padLineColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "padLineWidthHover": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "hover"
  },
  "padLineColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "hover"
  },
  "padLineWidthFocus": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "regular"
  },
  "padLineColorFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "padLineWidthError": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "error"
  },
  "padLineColorError": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "error"
  },
  "padLineWidthDisabled": {
    "type": "BORDER_SIZE",
    "defaultValue": "3px",
    "state": "disabled"
  },
  "padLineColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "disabled"
  },
  "clearButtonFont": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "regular"
  },
  "clearButtonColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "regular"
  },
  "clearButtonFontDisabled": {
    "type": "FONT",
    "defaultValue": "font_9",
    "state": "disabled"
  },
  "clearButtonColorDisabled": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_14",
    "state": "disabled"
  },
  "signatureColor": {
    "type": "COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "signatureSize": {
    "type": "TEXT_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  }
}
 skins['wixui.skins.Slider'] = {
  "thumbBackground": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_25",
    "state": "regular"
  },
  "thumbBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_22",
    "state": "regular"
  },
  "thumbBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "4",
    "state": "regular"
  },
  "thumbBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, .6)",
    "state": "regular"
  },
  "tickMarkColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_4",
    "state": "regular"
  },
  "tooltipFontFamily": {
    "type": "FONT_FAMILY",
    "defaultValue": "arial",
    "state": "regular"
  },
  "tooltipFontSize": {
    "type": "TEXT_SIZE",
    "defaultValue": "14",
    "state": "regular"
  },
  "tooltipFontColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "color_1",
    "state": "regular"
  },
  "tooltipBackground": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_30",
    "state": "regular"
  },
  "tooltipBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "2px",
    "state": "regular"
  },
  "tooltipBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "initial",
    "state": "regular"
  },
  "thumbBackgroundHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "hover"
  },
  "thumbBorderColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "hover"
  },
  "thumbBorderWidthHover": {
    "type": "BORDER_SIZE",
    "defaultValue": "4",
    "state": "hover"
  },
  "thumbBackgroundFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_22",
    "state": "focus"
  },
  "thumbBorderColorFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_24",
    "state": "focus"
  },
  "thumbBorderWidthFocus": {
    "type": "BORDER_SIZE",
    "defaultValue": "4",
    "state": "focus"
  },
  "thumbBackgroundDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_21",
    "state": "disabled"
  },
  "thumbBorderColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_25",
    "state": "disabled"
  },
  "thumbBorderWidthDisabled": {
    "type": "BORDER_SIZE",
    "defaultValue": "4",
    "state": "disabled"
  },
  "trackBackground": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_26",
    "state": "regular"
  },
  "trackBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "8px",
    "state": "regular"
  },
  "trackBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_28",
    "state": "regular"
  },
  "trackBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "7",
    "state": "regular"
  },
  "trackBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, .6)",
    "state": "regular"
  },
  "trackFill": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_22",
    "state": "regular"
  },
  "trackFillHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_23",
    "state": "hover"
  },
  "trackFillFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_24",
    "state": "focus"
  },
  "trackFillDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_25",
    "state": "disabled"
  },
  "trackBackgroundHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_27",
    "state": "hover"
  },
  "trackBorderColorHover": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_29",
    "state": "hover"
  },
  "trackBorderWidthHover": {
    "type": "BORDER_SIZE",
    "defaultValue": "6",
    "state": "hover"
  },
  "trackBackgroundFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_28",
    "state": "focus"
  },
  "trackBorderColorFocus": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_30",
    "state": "focus"
  },
  "trackBorderWidthFocus": {
    "type": "BORDER_SIZE",
    "defaultValue": "6",
    "state": "focus"
  },
  "trackBackgroundDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_29",
    "state": "disabled"
  },
  "trackBorderColorDisabled": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_31",
    "state": "disabled"
  },
  "trackBorderWidthDisabled": {
    "type": "BORDER_SIZE",
    "defaultValue": "6",
    "state": "disabled"
  },
  "thumbBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "8px",
    "state": "regular"
  }
}
 skins['wixui.skins.Tags'] = {
  "tagBoxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 1px 4px rgba(0, 0, 0, .6)",
    "state": "regular"
  },
  "tagBorderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "3",
    "state": "regular"
  },
  "tagBorderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_3",
    "state": "regular"
  },
  "tagBorderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "100px",
    "state": "regular"
  },
  "tagBackgroundColor": {
    "type": "COLOR",
    "defaultValue": "color_8",
    "state": "regular"
  },
  "tagFont": {
    "type": "FONT",
    "defaultValue": "font_4",
    "state": "regular"
  },
  "tagFontColor": {
    "type": "COLOR",
    "defaultValue": "color_3",
    "state": "regular"
  },
  "tagFontColorHover": {
    "type": "COLOR",
    "defaultValue": "color_1",
    "state": "hover"
  },
  "tagBackgroundColorHover": {
    "type": "COLOR",
    "defaultValue": "color_6",
    "state": "hover"
  }
}
 skins['wixui.skins.TimePicker'] = {
  "borderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "borderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#919191",
    "state": "regular"
  },
  "borderRadius": {
    "type": "BORDER_RADIUS",
    "defaultValue": "0px",
    "state": "regular"
  },
  "backgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#FFFFFF",
    "state": "regular"
  },
  "boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "0 0px 0px rgba(0, 0, 0, .7)",
    "state": "regular"
  },
  "textColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "hoverBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#F2FAF9",
    "state": "hover"
  },
  "hoverBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "hover"
  },
  "hoverBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "hover"
  },
  "focusBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#FFFFFF",
    "state": "focus"
  },
  "focusBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "focus"
  },
  "focusBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "focus"
  },
  "disabledBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#FFFFFF",
    "state": "disabled"
  },
  "disabledBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#DBDBDB",
    "state": "disabled"
  },
  "disabledBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "disabled"
  },
  "disabledTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#D4D4D4",
    "state": "disabled"
  },
  "errorBackgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#FFFFFF",
    "state": "error"
  },
  "errorBorderColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#ff4040",
    "state": "error"
  },
  "errorBorderWidth": {
    "type": "BORDER_SIZE",
    "defaultValue": "1px",
    "state": "error"
  },
  "textFont": {
    "type": "FONT",
    "defaultValue": "font_1",
    "state": "regular"
  },
  "iconColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "#000000",
    "state": "regular"
  },
  "placeholderTextColor": {
    "type": "TEXT_COLOR",
    "defaultValue": "#000000",
    "state": "regular"
  }
}
 skins['wixui.skins.VideoPlayer'] = {
  "boxShadow": {
    "type": "BOX_SHADOW",
    "defaultValue": "none",
    "state": "regular"
  },
  "borderSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "0",
    "state": "regular"
  },
  "borderColor": {
    "type": "BORDER_COLOR_ALPHA",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "font": {
    "type": "FONT",
    "defaultValue": "font_8",
    "state": "regular"
  },
  "fontColor": {
    "type": "COLOR",
    "defaultValue": "color_2",
    "state": "regular"
  },
  "textSizeScale": {
    "type": "TEXT_SIZE",
    "defaultValue": "1px",
    "state": "regular"
  },
  "backgroundColor": {
    "type": "COLOR_ALPHA",
    "defaultValue": "color_10",
    "state": "regular"
  },
  "playButtonSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "50px",
    "state": "regular"
  },
  "playButtonMobileSize": {
    "type": "BORDER_SIZE",
    "defaultValue": "30px",
    "state": "regular"
  }
}

        return skins;
    }));