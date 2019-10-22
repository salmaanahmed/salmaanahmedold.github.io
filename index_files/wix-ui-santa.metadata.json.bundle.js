
(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof module === 'object' && module.exports) { module.exports = factory(); } else { root.returnExports = factory(); } }(typeof self !== 'undefined' ? self : this, function () { return {
  "version": "1.0.0",
  "name": "wix-ui-santa",
  "fs": {
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Playlist/Playlist.st.css": {
      "metadata": {
        "namespace": "Playlist4135513962",
        "depth": 1
      },
      "content": ".playlistRoot {\n  display: flex;\n  flex-direction: column;\n  color: black;\n}\n\n.playlistItem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  height: 30px;\n}\n\n.playlistItemPlay {\n  display: none;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  fill: currentColor;\n  background: transparent;\n  cursor: pointer;\n  color: currentColor;\n  flex: 0 0 20px;\n}\n\n.playlistItemTitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1 0 50%;\n  text-align: left;\n  margin: 0 10px;\n  color: #000;\n}\n\n.playlistItemDuration {\n  width: 15%;\n  text-align: right;\n  font-size: 12px;\n  color: #000;\n}\n\n.shareIcon, .trackInfo, .trackPrice {\n  width: 15%;\n  height: 100%;\n  display: none;\n  cursor: pointer;\n  justify-content: center;\n}\n\n.shareIcon {\n  max-width: 30px;\n  min-width: 25px;\n}\n\n.trackInfo {\n  max-width: 45px;\n  min-width: 30px;\n}\n\n.trackPrice {\n  font-size: 14px;\n  height: 80%;\n  color: white;\n  max-width: 50px;\n  padding: 0 5px;\n  background: darkorchid;\n}\n\n.playlistItem:hover .playlistItemPlay,\n.playlistItem:hover .trackInfo,\n.playlistItem:hover .trackPrice{\n  display: flex;\n  align-items: center;\n}\n\n.playlistItem:hover .playlistItemDuration{\n  display: none;\n}\n\n.divider {\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.2);\n  margin: 12px auto 0;\n  width: 96%;\n}\n\n.shareBuyLinksBlock {\n  height: 45px;\n  display: flex;\n  font-size: 14px;\n}\n\n.albumPriceWrapper {\n  text-align: left;\n  box-sizing: border-box;\n  padding-left: 5%;\n  line-height: 45px;\n  flex: 1 0 85%\n}\n\n.albumPrice {\n  cursor: pointer;\n}\n\n.linkShareAlbumWrapper {\n  flex: 0 0 15%;\n  line-height: 45px;\n  max-width: 50px;\n  padding-right: 2.5%;\n  cursor: pointer;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/index.st.css": {
      "metadata": {
        "namespace": "index704162396",
        "depth": 6
      },
      "content": "\n:import {-st-from: \"./dist/src/components/video/Video.st.css\";-st-default:Video;}\n.root Video{}\n:import {-st-from: \"./dist/src/components/tooltip/Tooltip.st.css\";-st-default:Tooltip;}\n.root Tooltip{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitch.st.css\";-st-default:ToggleSwitch;}\n.root ToggleSwitch{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchColor.st.css\";-st-default:ToggleSwitchColor;}\n.root ToggleSwitchColor{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchLayout.st.css\";-st-default:ToggleSwitchLayout;}\n.root ToggleSwitchLayout{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchStyle.st.css\";-st-default:ToggleSwitchStyle;}\n.root ToggleSwitchStyle{}\n:import {-st-from: \"./dist/src/components/time-picker/Tickers.st.css\";-st-default:Tickers;}\n.root Tickers{}\n:import {-st-from: \"./dist/src/components/time-picker/TimePicker.st.css\";-st-default:TimePicker;}\n.root TimePicker{}\n:import {-st-from: \"./dist/src/components/thumbnail/Thumbnail.st.css\";-st-default:Thumbnail;}\n.root Thumbnail{}\n:import {-st-from: \"./dist/src/components/tags-list/Tag.st.css\";-st-default:Tag;}\n.root Tag{}\n:import {-st-from: \"./dist/src/components/tags-list/TagsList.st.css\";-st-default:TagsList;}\n.root TagsList{}\n:import {-st-from: \"./dist/src/components/slider/Slider.st.css\";-st-default:Slider;}\n.root Slider{}\n:import {-st-from: \"./dist/src/components/signature-input/title/Title.st.css\";-st-default:Title;}\n.root Title{}\n:import {-st-from: \"./dist/src/components/signature-input/signing-pad/SigningPad.st.css\";-st-default:SigningPad;}\n.root SigningPad{}\n:import {-st-from: \"./dist/src/components/signature-input/clear-button/ClearButton.st.css\";-st-default:ClearButton;}\n.root ClearButton{}\n:import {-st-from: \"./dist/src/components/radio-button/RadioButton.st.css\";-st-default:RadioButton;}\n.root RadioButton{}\n:import {-st-from: \"./dist/src/components/popover/Popover.st.css\";-st-default:Popover;}\n.root Popover{}\n:import {-st-from: \"./dist/src/components/pagination/Pagination.st.css\";-st-default:Pagination;}\n.root Pagination{}\n:import {-st-from: \"./dist/src/components/pagination/PaginationTest.st.css\";-st-default:PaginationTest;}\n.root PaginationTest{}\n:import {-st-from: \"./dist/src/components/nav-stepper/NavStep.st.css\";-st-default:NavStep;}\n.root NavStep{}\n:import {-st-from: \"./dist/src/components/nav-stepper/NavStepper.st.css\";-st-default:NavStepper;}\n.root NavStepper{}\n:import {-st-from: \"./dist/src/components/menu-item/menu-item.st.css\";-st-default:MenuItem;}\n.root MenuItem{}\n:import {-st-from: \"./dist/src/components/linear-progress-bar/LinearProgressBar.st.css\";-st-default:LinearProgressBar;}\n.root LinearProgressBar{}\n:import {-st-from: \"./dist/src/components/label-with-options/LabelWithOptions.st.css\";-st-default:LabelWithOptions;}\n.root LabelWithOptions{}\n:import {-st-from: \"./dist/src/components/input-with-options/InputWithOptions.st.css\";-st-default:InputWithOptions;}\n.root InputWithOptions{}\n:import {-st-from: \"./dist/src/components/input/Input.st.css\";-st-default:Input;}\n.root Input{}\n:import {-st-from: \"./dist/src/components/image/image.st.css\";-st-default:Image;}\n.root Image{}\n:import {-st-from: \"./dist/src/components/icon-with-options/IconWithOptions.st.css\";-st-default:IconWithOptions;}\n.root IconWithOptions{}\n:import {-st-from: \"./dist/src/components/file-picker-button/FilePickerButton.st.css\";-st-default:FilePickerButton;}\n.root FilePickerButton{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/Ellipsis.st.css\";-st-default:Ellipsis;}\n.root Ellipsis{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/EllipsisTooltip.st.css\";-st-default:EllipsisTooltip;}\n.root EllipsisTooltip{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css\";-st-default:EllipsisTooltipTests;}\n.root EllipsisTooltipTests{}\n:import {-st-from: \"./dist/src/components/dropdown-option/DropdownOption.st.css\";-st-default:DropdownOption;}\n.root DropdownOption{}\n:import {-st-from: \"./dist/src/components/dropdown-content/DropdownContent.st.css\";-st-default:DropdownContent;}\n.root DropdownContent{}\n:import {-st-from: \"./dist/src/components/dropdown/Dropdown.st.css\";-st-default:Dropdown;}\n.root Dropdown{}\n:import {-st-from: \"./dist/src/components/deprecated/stylable-badge/Badge.st.css\";-st-default:Badge;}\n.root Badge{}\n:import {-st-from: \"./dist/src/components/deprecated/stylable-badge/BadgeStyle.st.css\";-st-default:BadgeStyle;}\n.root BadgeStyle{}\n:import {-st-from: \"./dist/src/components/deprecated/label/Label.st.css\";-st-default:Label;}\n.root Label{}\n:import {-st-from: \"./dist/src/components/deprecated/divider/Divider.st.css\";-st-default:Divider;}\n.root Divider{}\n:import {-st-from: \"./dist/src/components/deprecated/button/Button.st.css\";-st-default:Button;}\n.root Button{}\n:import {-st-from: \"./dist/src/components/deprecated/button/ButtonStyle.st.css\";-st-default:ButtonStyle;}\n.root ButtonStyle{}\n:import {-st-from: \"./dist/src/components/circular-progress-bar/CircularProgressBar.st.css\";-st-default:CircularProgressBar;}\n.root CircularProgressBar{}\n:import {-st-from: \"./dist/src/components/checkbox/Checkbox.st.css\";-st-default:Checkbox;}\n.root Checkbox{}\n:import {-st-from: \"./dist/src/components/captcha/Captcha.st.css\";-st-default:Captcha;}\n.root Captcha{}\n:import {-st-from: \"./dist/src/components/button-next/button-next.st.css\";-st-default:ButtonNext;}\n.root ButtonNext{}\n:import {-st-from: \"./dist/src/components/avatar/avatar.st.css\";-st-default:Avatar;}\n.root Avatar{}\n:import {-st-from: \"./dist/src/components/autocomplete/Autocomplete.st.css\";-st-default:Autocomplete;}\n.root Autocomplete{}\n:import {-st-from: \"./dist/src/components/address-input/AddressInput.st.css\";-st-default:AddressInput;}\n.root AddressInput{}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/input/Input.st.css": {
      "metadata": {
        "namespace": "Input3063289869",
        "depth": 1
      },
      "content": ".root {\n  -st-states: disabled, error, focus;\n  position: relative;\n}\n\n.nativeInput {}\n"
    },
    "/wix-ui-santa/src/components/Rating/Rating.st.css": {
      "metadata": {
        "namespace": "Rating2556983050",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: RadioButton\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Rating'; \n\n        /* REGULAR */\n    /* @type COLOR_ALPHA */\n    filledShapeColor: color_5;\n    /* @type COLOR_ALPHA */\n    emptyShapeColor: color_15;\n\n    /* @type BORDER_COLOR_ALPHA */\n    shapeBorderColor: color_32;\n    /* @type BORDER_SIZE */\n    shapeBorderWidth: 3;\n\n    /* @type FONT */\n    labelFont: font_8;\n    /* @type TEXT_COLOR */\n    labelFontColor: color_15;\n\n        /* ERROR */\n    /* @type COLOR_ALPHA */\n    errorFilledShapeColor: color_7;\n    /* @type BORDER_COLOR_ALPHA */\n    errorShapeBorderColor: color_37;\n    /* @type BORDER_SIZE */\n    errorShapeBorderWidth: 7;\n    /* @type TEXT_COLOR */\n    errorLabelFontColor: color_17;\n\n        /* FOCUS */\n    /* @type COLOR_ALPHA */\n    focusEmptyShapeColor: #b0abba;\n    /* @type BORDER_COLOR_ALPHA */\n    focusShapeBorderColor: #b0abba;\n    /* @type BORDER_SIZE */\n    focusShapeBorderWidth: 1;\n\n}\n\n.root {\n    display: inline-flex;\n    align-items: center;\n    font: value(labelFont);\n    -st-states: ratingAfter, editorMode, noReviewsMode(enum(nothing, empty-icons, placeholder-text)),\n                labelPosition(enum(top, bottom, side)), disabled, rtl, alignment(enum(left, right, center)), error,\n                mode(enum(display, input));\n}\n\n.root:rtl::displayMode, .root:rtl::inputMode {\n    direction: rtl;\n}\n\n.displayMode {\n    display: inline-flex;\n    width: 100%;\n    align-items: center;\n}\n\n.root:alignment(center)::displayMode {\n    justify-content: center;\n}\n\n.root:alignment(right)::displayMode, .root:rtl:alignment(left)::displayMode {\n    justify-content: flex-end;\n}\n\n.root:alignment(left)::displayMode, .root:rtl:alignment(right)::displayMode {\n    justify-content: flex-start;\n}\n\n.inputMode {\n    display: inline-flex;\n    flex-direction: column;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n}\n\n.root:alignment(right)::inputMode {\n    text-align: right;\n    align-items: flex-end;\n}\n\n.root:rtl:alignment(right)::inputMode {\n    align-items: flex-start;\n}\n\n.root:alignment(left)::inputMode {\n    text-align: left;\n    align-items: flex-start;\n}\n\n.root:rtl:alignment(left)::inputMode {\n    align-items: flex-end;\n}\n\n.root:labelPosition(side)::inputMode, .root:rtl:labelPosition(side)::inputMode {\n    flex-direction: row;\n    align-items: center;\n}\n\n.stars {\n    order: 2;\n    display: flex;\n}\n\n.root:mode(input)::stars {\n    cursor: pointer;\n}\n\n.root:disabled::stars {\n    pointer-events: none;\n}\n\n.ratingValue, .reviewsCount, .noReviewsPlaceholder {\n    color: value(labelFontColor);\n    line-height: 1.5;\n}\n\n.ratingValue {\n    order: 1;\n    align-self: center;\n}\n\n.reviewsCount {\n    order: 3;\n    align-self: center;\n    white-space: nowrap;\n}\n\n.noReviewsPlaceholder {\n    align-self: center;\n    white-space: nowrap;\n    overflow-x: hidden;\n}\n\n.labelsContainer {\n    display: inline-flex;\n    width: 100%;\n    order: 1;\n    overflow: hidden;\n    align-items: flex-end;\n}\n\n.root:labelPosition(bottom)::labelsContainer {\n    align-items: flex-start;\n}\n\n.root:labelPosition(side)::labelsContainer {\n    align-items: center;\n}\n\n.label, .title {\n    color: value(labelFontColor);\n    line-height: 1.5;\n    flex-shrink: 0;\n    display: block;\n    width: 100%;\n}\n\n.root:error::label, .root[data-preview=\"error\"]::label, .root:error::title, .root[data-preview=\"error\"]::title {\n    color: value(errorLabelFontColor);\n}\n\n.root:labelPosition(side)::stars {\n    align-self: center;\n}\n\n.label {\n    visibility: hidden;\n}\n\n.root:labelPosition(bottom)::stars, .root:labelPosition(side)::stars {\n    order: 0;\n}\n\n.root:ratingAfter::stars {\n    order: 0;\n}\n\n.root:noReviewsMode(nothing):editorMode::stars,\n.root:noReviewsMode(nothing):editorMode::ratingValue,\n.root:noReviewsMode(nothing):editorMode::reviewsCount {\n    opacity: 0.15;\n}\n\n.icon {\n    -st-states: checked, split;\n    display: block;\n    position: relative;\n    stroke: value(shapeBorderColor);\n    stroke-width: value(shapeBorderWidth);\n    fill: value(emptyShapeColor);\n}\n\n.icon path {\n    fill: value(emptyShapeColor);\n}\n\n.icon:checked path {\n    fill: value(filledShapeColor);\n}\n\n.icon svg {\n    display: block;\n    height: 100%;\n    width: 100%;\n    transform: translateZ(0);\n}\n\n.halfIcon {\n    position: absolute;\n    top: 0;\n    overflow: hidden;\n}\n\n.root:mode(display)::icon {\n    cursor: default\n}\n\n.root:error::icon:not(:checked), .root[data-preview=\"error\"]::icon {\n    stroke: value(errorShapeBorderColor);\n    stroke-width: value(errorShapeBorderWidth);\n}\n\n.root:error::icon:not(:checked) path, .root[data-preview=\"error\"]::icon path{\n    fill: value(errorFilledShapeColor);\n}\n\n.radioButton {\n    -st-extends: RadioButton;\n}\n\n.radioButton:focus-visible .icon:not(:checked) path, .root[data-preview=\"focus\"]::icon:not(:checked) path {\n    fill: value(focusEmptyShapeColor);\n}\n\n.radioButton:focus-visible .icon, .root[data-preview=\"focus\"]::icon {\n    stroke: value(focusShapeBorderColor);\n    stroke-width: value(focusShapeBorderWidth);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/video/Video.st.css": {
      "metadata": {
        "namespace": "Video3210025037",
        "depth": 1
      },
      "content": ".root {\n    position: relative;\n}\n\n.playerContainer {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    background-color: #000;\n}\n\n.playerContainer iframe {\n    height: 100%;\n    width: 100%;\n    visibility: visible;\n}\n\n.cover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: #000 50% 50% no-repeat;\n    background-size: cover;\n    cursor: pointer;\n}\n\n.cover.transparentOverlay {\n    background: transparent;\n}\n\n.overlay {\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.35);\n}\n\n.title {\n    margin: 0 15px 15px;\n    text-align: center;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/dropdown-option/DropdownOption.st.css": {
      "metadata": {
        "namespace": "DropdownOption3045266979",
        "depth": 1
      },
      "content": ":vars {\n  /** Option background color when hovered */\n  hoverBackgroundColor: lightgrey;\n  /** Option background color when selected */\n  selectedBackgroundColor: grey;\n  /** Option background color when selected & hovered */\n  selectedHoverBackgroundColor: dimgrey;\n  /** Option background color when disabled */\n  disabledBackgroundColor: white;\n}\n\n.root {\n  -st-states: hovered, disabled, selectable, selected;\n  cursor: pointer;\n}\n\n.root:hovered {\n  background-color: value(hoverBackgroundColor);\n}\n\n.root:disabled {\n  cursor: default;\n  background-color: value(disabledBackgroundColor);\n}\n\n.root:selected {\n  background-color: value(selectedBackgroundColor);\n}\n\n.root:selected:hovered {\n  background-color: value(selectedHoverBackgroundColor);\n}\n\n.root:not(:selectable) {\n  cursor: default;\n}\n\n.highlight {\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.nonHighlight {\n\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/dropdown/Dropdown.st.css": {
      "metadata": {
        "namespace": "Dropdown1811323016",
        "depth": 3
      },
      "content": ":import {\n  -st-from: \"../popover/Popover.st.css\";\n  -st-default: Popover;\n}\n\n:import {\n  -st-from: \"../dropdown-content/DropdownContent.st.css\";\n  -st-default: DropdownContent;\n}\n\n.root {\n  -st-extends: Popover;\n  -st-states: content-visible;\n}\n\n.root::popover {\n  min-width: 100%;\n}\n\n.dropdownContent {\n  -st-extends: DropdownContent;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/popover/Popover.st.css": {
      "metadata": {
        "namespace": "Popover1759223103",
        "depth": 1
      },
      "content": ":import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  /** Background color of the content */\n  contentBackgroundColor: white;\n  /** Border width of the content */\n  contentBorderWidth: 1px;\n  /** Border style of the content */\n  contentBorderStyle: solid;\n  /** Border color of the content */\n  contentBorderColor: black;\n  /** Border radius of the content */\n  contentBorderRadius: initial;\n  /** Content padding for the content */\n  contentPadding: initial;\n  /** Size of the arrow of the content */\n  contentArrowSize: 5px;\n}\n\n.root {\n  /*popper sets tooltip in absolute position according to this container*/\n  position: relative;\n  /*popper adds an extra div that needs to be measured without stretching*/\n  display: inline-block;\n}\n\n.popoverAnimation {}\n\n.popoverAnimation-enter {}\n\n.popoverAnimation-enter.popoverAnimation-enter-active {}\n\n.popoverAnimation-exit {}\n\n.popoverAnimation-exit.popoverAnimation-exit-active {}\n\n.popoverContent {\n  background-color: value(contentBackgroundColor);\n  border-width: value(contentBorderWidth);\n  border-style: value(contentBorderStyle);\n  border-color: value(contentBorderColor);\n  border-radius: value(contentBorderRadius);\n  padding: value(contentPadding);\n}\n\n.arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: value(contentArrowSize);\n}\n\n.popover {\n}\n\n/* TODO: use a stylable state for this. Notice it would break consumers styles */\n.popover[data-placement*=\"right\"].withArrow {\n  padding-left: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"right\"].withArrow .arrow {\n  border-width: value(contentArrowSize) value(contentArrowSize) value(contentArrowSize) 0;\n  left: calc(-1 * value(contentArrowSize));\n  margin-left: value(contentArrowSize);\n  margin-right: 0;\n  border-color: transparent value(contentBorderColor) transparent transparent;\n}\n\n.popover[data-placement*=\"left\"].withArrow {\n  padding-right: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"left\"].withArrow .arrow {\n  border-width: value(contentArrowSize) 0 value(contentArrowSize) value(contentArrowSize);\n  right: calc(-1 * value(contentArrowSize));\n  margin-left: 0;\n  margin-right: value(contentArrowSize);\n  border-color: transparent transparent transparent value(contentBorderColor);\n}\n\n.popover[data-placement*=\"bottom\"].withArrow {\n  padding-top: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"bottom\"].withArrow .arrow {\n  border-width: 0 value(contentArrowSize) value(contentArrowSize) value(contentArrowSize);\n  top: calc(-1 * value(contentArrowSize));\n  margin-top: value(contentArrowSize);\n  margin-bottom: 0;\n  border-color: transparent transparent value(contentBorderColor) transparent;\n}\n\n.popover[data-placement*=\"top\"].withArrow {\n  padding-bottom: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"top\"].withArrow .arrow {\n  border-width: value(contentArrowSize) value(contentArrowSize) 0 value(contentArrowSize);\n  bottom: calc(-1 * value(contentArrowSize));\n  margin-top: 0;\n  margin-bottom: value(contentArrowSize);\n  border-color: value(contentBorderColor) transparent transparent transparent;\n}\n\n.popoverElement {}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/dropdown-content/DropdownContent.st.css": {
      "metadata": {
        "namespace": "DropdownContent767672140",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"../dropdown-option/DropdownOption.st.css\";\n  -st-default: DropdownOption;\n}\n\n.root {\n  outline: 0;\n}\n\n.optionsContainer {\n  outline: 0;\n  overflow: auto;\n  max-height: 260px;\n  position: relative;\n}\n\n.dropdownOption {\n  -st-extends: DropdownOption;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/hocs/Focusable/Focusable.st.css": {
      "metadata": {
        "namespace": "Focusable1358552990",
        "depth": 1
      },
      "content": ".root {\n  -st-states: focus, focus-visible;\n}\n\n.root:focus {\n /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.root:focus-visible {\n  /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.focus-box {\n\toutline: none;\n}\n\n.focus-box-error {\n\toutline: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/radio-button/RadioButton.st.css": {
      "metadata": {
        "namespace": "RadioButton979468272",
        "depth": 1
      },
      "content": ".root {\n  display: inline-block;\n  -st-states: disabled, checked, focused, focus-visible;\n}\n\n.icon {\n  cursor: pointer;\n  height: auto;\n}\n\n.label {}\n\n.root:checked::icon, .root:hover::icon {}\n\n.root:disabled {\n  filter: grayscale(75%);\n  opacity: 0.7;\n}\n\n.hiddenRadio {\n  position: absolute;\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  opacity: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/time-picker/Tickers.st.css": {
      "metadata": {
        "namespace": "Tickers1232428983",
        "depth": 1
      },
      "content": ".root {\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n}\n\n.ticker {\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/ProgressBar/ProgressBar.st.css": {
      "metadata": {
        "namespace": "ProgressBar2061758168",
        "depth": 1
      },
      "content": ":vars {\n  range-track-height: 4px;\n  range-thumb-height: 4px;\n  range-thumb-hover-height: 12px;\n  range-thumb-bg: #fff;\n  border-radius: 50px;\n  progress-size: 12px;\n}\n\n.mixin-range-track {\n  background: transparent;\n  border: 0;\n  border-radius: value(border-radius);\n  height: 100%;\n  user-select: none;\n}\n\n.mixin-range-thumb {\n  background: value(range-thumb-bg);\n  border: 0;\n  border-radius: value(border-radius);\n  height: value(range-track-height);\n  width: value(range-track-height);\n  margin: 0;\n  position: relative;\n  transition: all 0.3s ease;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  height: value(range-track-height);\n  margin: 8px 0;\n}\n\n.container::before,\n.container::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: value(border-radius);\n    display: none;\n}\n\n.container::before {\n    display: block;\n    opacity: .2;\n    background: currentColor;\n}\n\n@keyframes progress-bar-stripes {\n  from { background-position: 12px 0; }\n  to { background-position: 0 0; }\n}\n\n.container.loading::after {\n  display: block;\n  pointer-events: none;\n  opacity: .15;\n  background: linear-gradient(\n      45deg,\n      currentColor 25%,\n      transparent 25%,\n      transparent 50%,\n      currentColor 50%,\n      currentColor 75%,\n      transparent 75%,\n      transparent\n  );\n  background-size: value(progress-size) value(progress-size);\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n\n.progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  border: 0;\n  border-radius: value(border-radius);\n  background-color: transparent;\n  color: currentColor;\n  opacity: .3;\n  -webkit-appearance: none;\n}\n\n.progress::-webkit-progress-bar {\n  background-color: transparent;\n  border-radius: value(border-radius);\n}\n\n.progress::-moz-progress-bar {\n  background-color: currentColor;\n  border-radius: value(border-radius);\n}\n\n.progress::-webkit-progress-value {\n  background-color: currentColor;\n  border-radius: value(border-radius);\n}\n\n.progress::-ms-fill {\n  border-radius: value(border-radius);\n}\n\n.range {\n  position: absolute;\n  top: -8px; /*calc(value(range-thumb-height) - value(range-thumb-hover-height));*/\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  box-sizing: content-box;\n  padding: 8px 0; /*calc(value(range-thumb-hover-height) - value(range-thumb-height)) 0;*/\n  margin: 0;\n  border: 0;\n  border-radius: value(border-radius);\n  background: transparent;\n  color: currentColor;\n  transition: color 0.3s ease;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n\n.range::-webkit-slider-runnable-track {\n  -st-mixin: mixin-range-track;\n  background-image: linear-gradient(\n    to right,\n    currentColor var(--value, 0%),\n    transparent var(--value, 0%)\n  );\n}\n\n.range::-webkit-slider-thumb {\n  -st-mixin: mixin-range-thumb;\n  transform: translateX(var(--value, 0%));\n  margin-left: -2px;\n  -webkit-appearance: none;\n}\n\n.range::-moz-range-track {\n  -st-mixin: mixin-range-track;\n}\n\n.range::-moz-range-thumb {\n  -st-mixin: mixin-range-thumb;\n  transform: translateX(-2px);\n}\n\n.range::-moz-range-progress {\n  background: currentColor;\n  border-radius: value(border-radius);\n  height: 100%;\n}\n\n.range::-moz-focus-outer {\n  border: 0;\n}\n\n.range:hover::-webkit-slider-thumb,\n.range:active::-webkit-slider-thumb {\n  transform: scale(3);\n}\n\n.range:hover::-moz-range-thumb,\n.range:active::-moz-range-thumb {\n  transform: scale(3);\n}\n\n.range:hover::-ms-thumb,\n.range:active::-ms-thumb {\n  transform: scale(3);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/input-with-options/InputWithOptions.st.css": {
      "metadata": {
        "namespace": "InputWithOptions2946123342",
        "depth": 4
      },
      "content": ":import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n:import {\n  -st-from: \"../input/Input.st.css\";\n  -st-default: Input;\n}\n\n.root {\n  -st-extends: Dropdown;\n}\n\n.inputComponent {\n  -st-extends: Input;\n}"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Skip/Skip.st.css": {
      "metadata": {
        "namespace": "Skip943277571",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  width: 25px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  fill: currentColor;\n  background: transparent;\n  cursor: pointer;\n  color: currentColor;\n  transition: color .4s ease, opacity .4s ease;\n}\n\n.iconWrapper {\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.backSkip {\n  transform: rotate(0.5turn);\n}\n"
    },
    "/wix-ui-santa/src/components/MusicPlayer/MusicPlayer.st.css": {
      "metadata": {
        "namespace": "MusicPlayer2902040282",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"@wix/soundhead-react/dist/es/src/components/Playlist/Playlist.st.css\";\n  -st-default: Playlist\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.MusicPlayer';\n\n    /* @type COLOR_ALPHA */\n    backgroundColor: color_11;\n\n    /* @type COLOR_ALPHA */\n    backgroundColorIcon: color_19;\n\n    /* @type FONT */\n    font: font_8;\n\n    /* @type COLOR */\n    regularColor: color_15;\n\n    /* @type COLOR */\n    hoverColor: color_18;\n\n    /* @type BORDER_COLOR_ALPHA */\n    borderColor: color_15;\n\n    /* @type BORDER_SIZE */\n    borderSize: 0;\n\n    /* @type BORDER_RADIUS */\n    borderRadius: 0;\n\n    /* @type BOX_SHADOW */\n    boxShadow: none;\n}\n\n.root {\n    -st-states: isMobileView, isDesktopView, hasCover, hasProgressBar, hasSingleRow, hasTitleTimeRow, hasOnlyPlay, isHoverState, isClassicLayout, isIconLayout, isTracksAreAvailableToShare, showTracksActions;\n    box-shadow: none;\n    position: relative;\n    width: 100%;\n    min-height: 40px;\n    text-align: left;\n    color: value(regularColor);\n    font: value(font);\n    overflow: hidden;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n}\n\n.mainLayoutWrapper {\n    display: flex;\n    width: 100%;\n}\n\n.root:isClassicLayout {\n    background: value(backgroundColor);\n    border: value(borderSize) solid value(borderColor);\n    border-radius: value(borderRadius);\n}\n\n.root:isClassicLayout .mainLayoutWrapper{\n  height: 70px;\n}\n\n.root:isIconLayout .mainLayoutWrapper{\n  height: 100%;\n}\n\n.root:isIconLayout {\n    background: transparent;\n    height: 100%;\n}\n\n.title {\n    text-align: left;\n    font-size: inherit;\n}\n\n.title + .title {\n    opacity: 0.6;\n}\n\n.title + .title::before {\n    content: '-';\n    padding: 0.4em;\n    opacity: 1;\n}\n\n.title:empty + .title::before {\n    content: '';\n    display: none;\n}\n\n.title + .title:empty::before {\n    content: '';\n    display: none;\n}\n\n.cover {\n  height: 100%;\n  width: 100%;\n}\n\n.progressRangeBar::-webkit-slider-thumb {\n    background-color: value(regularColor);\n}\n\n.progressRangeBar::-moz-range-thumb {\n    background-color: value(regularColor);\n}\n\n.progressRangeBar:hover {\n    color: value(hoverColor);\n}\n\n.playButton:hover {\n    color: value(hoverColor);\n}\n\n.skipButton:hover {\n  color: value(hoverColor);\n}\n\n/* LAYOUT */\n\n.titleLayout {\n    display: flex;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.progressLayout {\n    width: auto;\n    flex-grow: 1;\n}\n\n.timeStamp {\n    opacity: 1;\n    font-size: 12px;\n    line-height: 16px;\n    padding: 2px 0;\n}\n\n.playLayout {\n    margin-right: 14px;\n}\n\n.mainLayout {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 12px 16px;\n    width: 100%;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\n.upperLayout {\n    display: flex;\n    box-sizing: border-box;\n    width: 100%;\n}\n\n.lowerLayout {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.coverLayout {\n    width: 70px;\n    flex: 0 0 70px;\n}\n\n.playlistLayout {\n    display: flex;\n    flex-direction: column;\n    font-size: 16px;\n}\n\n.root:hasSingleRow {\n    height: 40px;\n}\n\n.root:hasProgressBar::timeStamp {\n    opacity: 0.6;\n    padding-left: 12px;\n}\n\n.root:hasOnlyPlay::playLayout {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    margin-right: 0;\n}\n\n.root:hasSingleRow::coverLayout {\n    width: 40px;\n    flex-basis: 40px;\n}\n\n.root:hasTitleTimeRow::timeStamp {\n    font-size: 14px;\n    padding-left: 12px;\n}\n\n.root:isHoverState::playButton,\n.root:isHoverState::progressRangeBar {\n    color: value(hoverColor);\n}\n\n/*ICON___LAYOUT*/\n\n.root :global(.oneColor), .root :global(.oneColorWithOpacity), .root :global(.twoColors){\n    width: 100%;\n    height: 66.6%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.root :global(.oneColor) > svg > path {\n    fill: value(backgroundColorIcon)\n}\n\n.root :global(.oneColorWithOpacity) > svg > g {\n    fill: value(backgroundColorIcon)\n}\n\n.root :global(.twoColors) > svg > g > path:nth-of-type(1) {\n    fill: value(backgroundColorIcon)\n}\n\n.root :global(.oneColorPause) > svg > g {\n  fill: value(backgroundColorIcon)\n}\n\n.root :global(.twoColors) > svg > g > path:nth-of-type(2) {\n    fill: value(regularColor)\n}\n\n.root:isHoverState :global(.oneColor) > svg > path {\n    fill: value(hoverColor);\n}\n\n.root:isHoverState :global(.oneColorWithOpacity) > svg > g {\n    fill: value(hoverColor);\n}\n\n.root:isHoverState :global(.twoColors) > svg > g > path:nth-of-type(2) {\n    fill: value(hoverColor);\n}\n\n.root :global(.oneColorPause):hover > svg > g {\n  fill: value(hoverColor)\n}\n\n.root :global(.oneColor):hover > svg > path {\n    fill: value(hoverColor);\n}\n\n.root :global(.oneColorWithOpacity):hover > svg > g {\n    fill: value(hoverColor);\n}\n\n.root :global(.twoColors):hover > svg > g > path:nth-of-type(2) {\n    fill: value(hoverColor);\n}\n\n.root :global(.playPauseBtn) {\n  width: 100%;\n  height: 100%;\n}\n\n.playlist {\n  -st-extends: Playlist;\n}\n\n.playlist::playlistItem {\n  color: value(regularColor)\n}\n\n.root .playlist::playlistItem:hover::trackPrice{\n  background: value(regularColor);\n}\n\n.root .playlist::playlistItem:hover::shareIcon > svg > g > g{\n  fill: value(regularColor);\n}\n\n.root .playlist::playlistItem:hover::trackInfo > svg > g > g{\n  fill: value(regularColor);\n}\n\n.root .playlist::playlistItem:global(.selected)::playlistItemPlay > svg > g > g{\n  fill: value(regularColor);\n}\n\n.root:isTracksAreAvailableToShare .playlist::playlistItem:hover::shareIcon {\n  display: flex;\n  align-items: center;\n}\n\n.root .playlist::playlistItem:global(.selected)::playlistItemTitle{\n  color: value(regularColor);\n}\n\n.root .playlist::playlistItem:global(.selected)::playlistItemPlay{\n  display: flex;\n}\n\n.root:showTracksActions .playlist::shareIcon,\n.root:showTracksActions .playlist::trackInfo {\n  display: flex\n}\n"
    },
    "/wix-ui-santa/src/components/BarChart/BarChart.st.css": {
      "metadata": {
        "namespace": "BarChart2277138400",
        "depth": 1
      },
      "content": ":vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.BarChart';\n\n    /* @type COLOR */\n    color1: #308ddd;\n    /* @type COLOR */\n    hover1: #3899ec;\n    /* @type COLOR */\n    color2: #20455e;\n    /* @type COLOR */\n    hover2: #275473;\n    /* @type COLOR */\n    color3: #577083;\n    /* @type COLOR */\n    hover3: #7a92a5;\n    /* @type COLOR */\n    color4: #61ad5a;\n    /* @type COLOR */\n    hover4: #60bc57;\n    /* @type COLOR */\n    color5: #fdb10c;\n    /* @type COLOR */\n    hover5: #fac249;\n    /* @type COLOR */\n    color6: #d6453d;\n    /* @type COLOR */\n    hover6: #f66;\n    /* @type COLOR_ALPHA */\n    backgroundColor: color_18;\n}\n\n.root {\n    position: relative;\n    width: 100%;\n    height: 100%;\n\n    background: value(backgroundColor);\n}\n\n.rootContainer {\n    display: flex;\n\n    height: 100%;\n}\n\n.barItem {\n    -st-states: colorIndex(number);\n\n    position: relative;\n\n    min-width: 10px;\n    margin: 0 auto;\n    padding: 0 10px;\n\n    flex-grow: 0;\n}\n\n.barItem:colorIndex(0) {\n    background-color: value(color1);\n}\n\n.barItem:colorIndex(0):hover {\n    background-color: value(hover1);\n}\n\n.barItem:colorIndex(1) {\n    background-color: value(color2);\n}\n\n.barItem:colorIndex(1):hover {\n    background-color: value(hover2);\n}\n\n.barItem:colorIndex(2) {\n    background-color: value(color3);\n}\n\n.barItem:colorIndex(2):hover {\n    background-color: value(hover3);\n}\n\n.barItem:colorIndex(3) {\n    background-color: value(color4);\n}\n\n.barItem:colorIndex(3):hover {\n    background-color: value(hover4);\n}\n\n.barItem:colorIndex(4) {\n    background-color: value(color5);\n}\n\n.barItem:colorIndex(4):hover {\n    background-color: value(hover5);\n}\n\n.barItem:colorIndex(5) {\n    background-color: value(color6);\n}\n\n.barItem:colorIndex(5):hover {\n    background-color: value(hover6);\n}\n\n.barItemText {\n    font-size: 20px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    max-width: 100%;\n\n    transform: translate(-50%, -50%);\n\n    color: #fff;\n}\n\n.barItemTitle {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n\n    overflow: hidden;\n\n    max-width: 100%;\n    margin: 0 5px;\n\n    transform: translate(-50%, calc(100% + 12px));\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    pointer-events: none;\n}\n"
    },
    "/wix-ui-santa/src/components/ProgressBar/ProgressBar.st.css": {
      "metadata": {
        "namespace": "ProgressBar944847283",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: LinearProgressBar;\n}\n\n:import {\n    -st-from: \"santa-skin-utils/dist/cjs/runtime/functions.js\";\n    -st-named: getInnerBorderRadius;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.ProgressBar'; \n\n    /* @type COLOR_ALPHA */\n    barBackgroundColor: color_8;\n\n    /* @type COLOR_ALPHA */\n    barForegroundColor: color_6;\n\n    /* @type BORDER_RADIUS */\n    borderRadius: 0px;\n\n    /* @type BOX_SHADOW */\n    boxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type BORDER_SIZE */\n    borderSize: 0px;\n\n    /* @type COLOR_ALPHA */\n    borderColor: color_5;\n\n}\n\n.root {\n    -st-extends: LinearProgressBar;\n    -st-states: direction(enum(rtl, ltr)), viewMode(string);\n    z-index: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.root::barContainer {\n    border-radius: value(borderRadius);\n    height: 100%;\n    width: 100%;\n    box-shadow: value(boxShadow);\n    border-width: value(borderSize); \n    border-color: value(borderColor);\n    box-sizing: border-box;\n    overflow: hidden;\n    border-style: solid;\n}\n\n.root:direction(rtl) {\n    direction: rtl;\n}\n\n.root:direction(ltr) {\n    direction: ltr;\n}\n\n.root::barBackground {\n    background: value(barBackgroundColor);\n    border-radius: getInnerBorderRadius(value(borderRadius), value(borderSize));\n    height: 100%;\n    width: 100%;\n}\n\n.root::barForeground {\n    background: value(barForegroundColor);\n    height: 100%;   \n    border-radius: getInnerBorderRadius(value(borderRadius), value(borderSize));\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition-duration: 300ms;\n}\n\n.root:viewMode(editor)::barForeground {\n    transition: initial;\n}\n"
    },
    "/wix-ui-santa/src/components/Dropdown/Dropdown.st.css": {
      "metadata": {
        "namespace": "Dropdown1655188194",
        "depth": 1
      },
      "content": ":vars {\n  /* @type SKINS */\n  skins: 'ComboBoxInputSkinNew';\n\n  /* @type BG_COLOR_ALPHA */\n  bg: color_8;\n\n  /* @type BG_COLOR_ALPHA */\n  bg2: color_8;\n\n  /* @type BG_COLOR_ALPHA */\n  bgh: color_8;\n\n  /* @type BG_COLOR_ALPHA */\n  bgf: color_8;\n\n  /* @type BOX_SHADOW */\n  shd: 0 0 0 rgba(0, 0, 0, 0);\n\n  /* @type COLOR_ALPHA */\n  brd: #F9F9F9;\n\n  /* @type TEXT_COLOR */\n  txt: #888888;\n\n  /* @type TEXT_COLOR */\n  txt2: color_15;\n\n  /* @type TEXT_COLOR */\n  txt_placeholder: #888888;\n\n  /* @type TEXT_COLOR */\n  txtlbl: color_15;\n\n  /* @type COLOR_ALPHA */\n  txtlblrq: transparent;\n\n  /* @type FONT */\n  fnt: font_7;\n\n  /* @type BORDER_SIZES */\n  brw: 2px;\n\n  /* @type BORDER_SIZE */\n  brwh: 2px;\n\n  /* @type BORDER_SIZE */\n  brwf: 2px;\n\n  /* @type BORDER_SIZE */\n  brwe: 2px;\n\n  /* @type MARGIN_SIZE */\n  rd: 0px;\n\n  /* @type COLOR_ALPHA */\n  arrowColor: color_12;\n\n  /* @type FONT */\n  fntlbl: font_8;\n\n  __arrowDistance: 20px;\n\n  __arrow-color: #515151;\n  __brdh: #F9F9F9;\n  __brdf: #F9F9F9;\n  __brde: #F9F9F9;\n  __bge: color_8;\n\n  /*\n  properties:\nalpha-bg: \"1\"\narrowColor: \"#17B0B0\"\nbg: \"rgba(255, 255, 255, 1)\"\nbg2: \"#aaaaaa\"\nbgd: \"#FFFFFF\"\nbgh: \"#FAFAFA\"\nboxShadowToggleOn-shd: \"true\"\nbrd: \"#49D6D6\"\nbrdd: \"#D4D4D4\"\nbrde: \"#FF4040\"\nbrdf: \"#408F8F\"\nbrdh: \"#49D6D6\"\nbrw: \"1\"\nbrwe: \"1\"\nbrwf: \"1\"\nbrwh: \"1\"\nfnt: \"normal normal normal 16px/1.4em georgia\"\nfntlbl: \"normal normal normal 14px/1.4em georgia\"\nrd: \"0px\"\nshd: \"0.00px 2.00px 0px 0px rgba(73,214,214,1)\"\ntxt: \"#49D6D6\"\ntxt2: \"#A3E6E6\"\ntxt_placeholder: \"#49D6D6\"\ntxtd: \"#D4D4D4\"\ntxtlbl: \"#49D6D6\"\n*/\n\n}\n\n.host {\n  -st-states: error, show-dividers, preview-input-hover, preview-input-disabled, preview-input-focus, preview-input-error, preview-list-regular, preview-list-hover, alignment(enum(left, center, right)), mobile;\n\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.wrapper {\n  -st-states: direction(enum(rtl, ltr)), viewMode(string);\n  z-index: 0;\n  height: 100%;\n  width: 100%;\n\n  position: relative;\n  padding: 0;\n  margin: 0;\n\n}\n\n.select {\n  -st-states: textAlignment(enum(right, left, center)), withValidationIndication(string);\n\n  overflow: hidden;\n\n  box-shadow: value(shd);\n  font: value(fnt);\n\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n\n  color: value(txt);\n  border-style: solid;\n  border-width: value(brw);\n  border-color: value(brd);\n  border-radius: value(rd);\n  box-sizing: border-box !important;\n\n  -webkit-appearance: none !important;\n  -moz-appearance: none !important;\n\n  background-color: value(bg);\n  position: relative;\n  cursor: pointer;\n\n  margin: 0;\n  padding: 0 45px;\n  height: 100%;\n}\n\n.select:withValidationIndication(true):invalid:not(:focus):not(:hover) /*:invalid:not(:focus):not(:hover)*/\n{\n  border: 2px solid rgba(255, 64, 64, 1);\n}\n\n.select:textAlignment(left) {\n  text-align-last: left;\n}\n\n.select:textAlignment(right) {\n  text-align-last: right;\n}\n\n.select:textAlignment(center) {\n  text-align-last: center;\n}\n\n.root:direction(rtl) {\n  direction: rtl;\n}\n\n.root:direction(ltr) {\n  direction: ltr;\n}\n\n.select option {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.select.placeholder-style {\n  color: value(txt2);\n}\n\n.select.extended-placeholder-style {\n  color: value(txt_placeholder);\n}\n\n.select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000;\n}\n\n.select::-ms-expand {\n  display: none;\n}\n\n.select:focus::-ms-value {\n  background: transparent;\n}\n\n.select:not(.mobileCollection):hover, .select:not(.mobileCollection)[data-preview~=hover] {\n  border-style: solid;\n  background-color: value(bgh);\n}\n\n.select:not(.mobileCollection):focus, .select:not(.mobileCollection)[data-preview~=focus] {\n  border-style: solid;\n  background-color: value(bgf);\n}\n\n.select:not(.mobileCollection):disabled + .arrow, .select:not(.mobileCollection)[data-disabled=true] + .arrow, .select:not(.mobileCollection)[data-preview~=disabled] + .arrow {\n  border: none;\n}\n\n.arrow {\n  -st-states: textAlignment(enum(right, left, center));\n\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: inherit;\n  display: flex;\n  align-items: center;\n}\n\n.arrow:textAlignment(right) {\n  left: 0;\n}\n\n.arrow:textAlignment(left) {\n  right: 0;\n}\n\n.arrow:textAlignment(center) {\n  right: 0;\n}\n\n.arrow .svgContainer {\n  width: 12px;\n}\n\n.arrow .svgContainer svg {\n  height: 100%;\n  fill: value(arrowColor);\n}\n\n.left-direction .arrow,\n.left-direction .select:hover + .arrow,\n.left-direction .select[data-preview~=hover] + .arrow,\n.left-direction .select:focus + .arrow,\n.left-direction .select[data-preview~=focus] + .arrow, .left-direction[data-preview~=focus] .arrow,\n.left-direction .select[data-error=true] + .arrow,\n.left-direction .select[data-preview~=error] + .arrow {\n  border-left: 0;\n}\n\n.left-direction .arrow {\n  right: 0;\n}\n\n.root:direction(rtl) .arrow,\n.root:direction(rtl) .select:hover + .arrow,\n.root:direction(rtl) .select[data-preview~=hover] + .arrow,\n.root:direction(rtl) .select:focus + .arrow,\n.root:direction(rtl) .select[data-preview~=focus] + .arrow, .right-direction[data-preview~=focus] .arrow,\n.root:direction(rtl) .select[data-error=true] + .arrow,\n.root:direction(rtl) .select[data-preview~=error] + .arrow {\n  border-right: 0;\n}\n\n.root:direction(rtl) .arrow {\n  left: 0;\n}\n\n.center-direction .arrow,\n.center-direction .select:hover + .arrow,\n.center-direction .select[data-preview~=hover] + .arrow,\n.center-direction .select:focus + .arrow,\n.center-direction .select[data-preview~=focus] + .arrow, .center-direction[data-preview~=focus] .arrow,\n.center-direction .select[data-error=true] + .arrow,\n.center-direction .select[data-preview~=error] + .arrow {\n  border-left: 0;\n}\n\n.center-direction .arrow {\n  right: 0;\n}\n\n.mobileMenuContainer {\n  border: 0;\n}\n\n.mobileMenuContainer .arrow .svgContainer #icon {\n  fill: value(txt);\n}\n\n.label {\n  color: value(txtlbl);\n  font: value(fntlbl);\n\n  padding-left: 0;\n  padding-right: 20px;\n  display: inline-block;\n  margin-bottom: 14px;\n  text-align: left;\n  direction: ltr;\n  word-break: break-word;\n  line-height: 1;\n}\n\n.required .label::after {\n  content: \" *\";\n  color: value(txtlblrq);\n}\n\n.selectorWrapper {\n  flex: 1;\n  position: relative;\n}\n\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/divider/Divider.st.css": {
      "metadata": {
        "namespace": "Divider540049736",
        "depth": 1
      },
      "content": ":vars {\n  /** Height of the divider */\n  dividerHeight: 1px;\n  /** Background color of the divider */\n  dividerBackgroundColor: black;\n  /** Opacity of the divider */\n  dividerOpacity: initial;\n  /** Margin top of the divider */\n  dividerMarginTop: initial;\n  /** Margin bottom of the divider */\n  dividerMarginBottom: initial;\n}\n\n.root {\n  -st-states: vertical, customDivider;\n}\n\n.root:customDivider {\n  reset: all;\n}\n\n.root:not(:customDivider) {\n  height: value(dividerHeight);\n  background-color: value(dividerBackgroundColor);\n  opacity: value(dividerOpacity);\n  margin-top: value(dividerMarginTop);\n  margin-bottom: value(dividerMarginBottom);\n}\n\n.root:vertical {\n  height: auto;\n  width: value(dividerHeight);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/button-next/button-next.st.css": {
      "metadata": {
        "namespace": "buttonnext1006934211",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"../../hocs/Focusable/Focusable.st.css\";\n  -st-default: Focusable;\n}\n\n.root {\n  -st-states: disabled;\n  -st-extends: Focusable;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.content {}\n\n.prefix {\n  flex-shrink: 0;\n}\n\n.suffix {\n  flex-shrink: 0;\n}\n\n.root:disabled {\n  cursor: default;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-results-layouts/dist/src/components/ListLayout/ListLayoutItem.st.css": {
      "metadata": {
        "namespace": "ListLayoutItem1301636573",
        "depth": 3
      },
      "content": ":vars {\n  lineSize: 3;\n}\n\n\n.root {\n  -st-states: mobileView;\n  display: flex;\n  margin-bottom: 32px;\n  line-height: 1.0em;\n}\n\n.root:last-child {\n  margin-bottom: 0;\n}\n\n.lineClamp {\n  display: -webkit-box;\n  -webkit-line-clamp: value(lineSize);\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.content {\n  margin-left: 32px;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  justify-content: center;\n}\n\n.thumbnail {\n  width: 176px;\n  height: 124px;\n}\n\n.title {}\n\n.description {\n  margin-top: 8px;\n  min-height: 20px;\n  max-height: 70px;\n  -st-mixin: lineClamp;\n}\n\n.root:mobileView .description {\n  margin-top: 4px;\n  max-height: 40px;\n  font-size: 14px !important;\n  -st-mixin: lineClamp(lineSize 2);\n}\n\n\n.root:mobileView {\n  margin-bottom: 20px;\n}\n\n.root:mobileView .content {\n  margin-left: 0;\n}\n\n.root:mobileView .title {\n  font-size: 16px !important;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box/dist/src/components/SearchBox/SearchBox.st.css": {
      "metadata": {
        "namespace": "SearchBox2280458897",
        "depth": 7
      },
      "content": "@namespace \"SearchBox\";\n\n:import {\n  -st-from: \"wix-ui-core/index.st.css\";\n  -st-named: InputWithOptions;\n}\n\n:import {\n  -st-from: \"wix-ui-core/index.st.css\";\n  -st-named: ButtonNext;\n}\n\n:import {\n  -st-from: \"@wix/search-results-layouts/dist/src/components/ListLayout/ListLayoutItem.st.css\";\n  -st-default: ListLayoutItem;\n  -st-named: lineClamp;\n}\n\n:import {\n  -st-from: \"../SuggestionFooter/SuggestionFooter.st.css\";\n  -st-default: SuggestionFooter;\n}\n\n:import {\n  -st-from: \"../SuggestionHeader/SuggestionHeader.st.css\";\n  -st-default: SuggestionHeader;\n}\n\n:import {\n  -st-from: \"santa-skin-utils/dist/cjs/runtime/functions.js\";\n  -st-named:\n    getFontWithSizeInRange,\n    isEmptyCSSValue,\n    getValueByCondition,\n    getColorWithOpacity;\n}\n\n:vars {\n  inputPlaceholderColor: rgba(0, 0, 0, 0.6);\n  inputBackgroundColor: rgb(255, 255, 255);\n  inputIconColor: rgba(0, 0, 0, 0.6);\n  buttonBackgroundColor: rgba(0, 0, 0, 0.07);\n  buttonIconColor: rgba(0, 0, 0, 0.96);\n  inputTextColor: rgba(0, 0, 0, 0.96);\n  inputFont: normal normal 300 normal 16px / normal Roboto, system-ui, sans-serif;\n  inputBorderColor: rgba(0, 0, 0, 0.6);\n  inputBorderWidth: 1px;\n  inputBorderRadius: 16px;\n  inputShadow:  none;\n  softInputShadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n\n  inputHoverBackgroundColor: rgb(255, 255, 245);\n  inputHoverIconColor: rgba(0, 0, 0, 1);\n  buttonHoverBackgroundColor: rgba(0, 0, 0, 0.1);\n  buttonHoverIconColor: rgba(0, 0, 0, 1);\n  inputHoverBorderColor: rgba(0, 0, 0, 8);\n  inputHoverBorderWidth: 1px;\n\n  inputFocusBackgroundColor: rgba(255, 255, 215, 1);\n  inputFocusIconColor: rgba(0, 0, 0, 1);\n  buttonFocusBackgroundColor: rgba(0, 0, 0, 0.2);\n  buttonFocusIconColor: rgba(0, 0, 0, 1);\n  inputFocusBorderColor: rgba(0, 0, 0, 96);\n  inputFocusBorderWidth: 1px;\n\n  suggestionHoverColor: rgba(255, 255, 175, 0.7);\n  suggestionSectionDividerColor: rgba(0, 0, 0, 0.2);\n\n  searchIconSize: 0.9em;\n}\n\n.root {\n   -st-states:\n    withClearIcon,\n    textAlignment(enum(left, center)),\n    buttonAlignment(enum(left, right)),\n    iconAlignment(enum(left, right)),\n    previewStateHover,\n    previewStateFocus,\n    withOverrideFontSize,\n    withSuggestions,\n    withCustomSuggestionsHeight;\n\n  display: flex;\n\n  /* Always should fit 100% width & height of parent to work corretcly in editor    */\n  width: 100%;\n  height: 100%;\n\n  box-shadow: value(inputShadow);\n  border-radius: value(inputBorderRadius);\n}\n\n/* Set font to .button-icon and .icon so sizes in \"em\" will work correctly */\n.root .input::inputComponent::nativeInput,\n.root .button-icon,\n.root .icon {\n  font: value(inputFont);\n}\n\n/* override font size if passed via component propert */\n.root:withOverrideFontSize .input::inputComponent::nativeInput,\n.root:withOverrideFontSize .button-icon,\n.root:withOverrideFontSize .icon {\n  font-size: var(--font-size);\n}\n\n/* --- CLEAR ICON --- */\n.root:withClearIcon .input::inputComponent::nativeInput {\n  padding-right: 0;\n}\n\n.clearButton {\n  color: value(inputTextColor);\n}\n\n/* --- INPUT --- */\n.inputContainer {\n  width: 100%;\n}\n\n.input {\n  -st-extends: InputWithOptions;\n}\n\n.input {\n  cursor: text;\n  box-sizing: border-box;\n\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n}\n\n.input::inputComponent {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.input::inputComponent::nativeInput {\n  outline: none;\n  border: none;\n  width: 100%;\n  background: transparent;\n  padding: 0;\n  /* left padding is different for textAlignment \"left\" & \"center\" */\n  padding: 8px 12px 8px 0;\n}\n\n.input::inputComponent::nativeInput::-ms-clear {\n  display: none;\n}\n\n/* value textSpacing property. Set it only if textAlignment is set to \"left\"*/\n.root:textAlignment(left) .input::inputComponent::nativeInput {\n  padding-left: var(--text-spacing);\n}\n\n.root:textAlignment(center) .input::inputComponent::nativeInput {\n  padding-left: 8px;\n}\n\n.input::popoverElement {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n\n  border-radius: value(inputBorderRadius);\n  border-style: solid;\n  border-width: value(inputBorderWidth);\n  border-color: value(inputBorderColor);\n}\n\n.input::inputComponent::nativeInput::placeholder {\n  color: value(inputPlaceholderColor);\n}\n\n.icon {\n  color: value(inputIconColor);\n  flex-shrink: 0;\n\n\n  min-width: 14px;\n  min-height: 14px;\n\n  max-width: 50px;\n  max-height: 50px;\n\n  /* by default icon size in \"em\" */\n  width: value(searchIconSize);\n  height: value(searchIconSize);\n}\n\n.root:iconAlignment(left) .icon {\n  margin-left: var(--icon-spacing);\n}\n\n.root:iconAlignment(right) .icon {\n  margin-right: var(--icon-spacing);\n}\n\n.root:previewStateHover .input .icon,\n.input:hover .icon {\n  color: value(inputHoverIconColor);\n}\n\n.root:previewStateFocus .icon,\n.input:focus-within .icon {\n  color: value(inputFocusIconColor);\n}\n\n.input::inputComponent::nativeInput {\n  color: value(inputTextColor);\n}\n\n.root:textAlignment(left) .input::inputComponent::nativeInput {\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.root:textAlignment(center) .input::inputComponent::nativeInput {\n  text-align: center;\n}\n\n/* --- BUTTON --- */\n.button {\n  -st-extends: ButtonNext;\n  flex-direction: column;\n  flex-shrink: 0;\n  outline:none;\n  border: none;\n\n  padding: 0;\n\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.button::content {\n  display: flex;\n}\n\n.button {\n  border-style: solid;\n  border-width: value(inputBorderWidth);\n  border-color: value(inputBorderColor);\n\n  border-top: none;\n  border-bottom: none;\n}\n.root:buttonAlignment(right) .button {\n  border-right: none;\n}\n\n.root:buttonAlignment(left) .button {\n  border-left: none;\n}\n\n.button::content {\n  background: value(buttonBackgroundColor);\n  flex-grow: 1;\n  align-items: center;\n  display: flex;\n}\n\n.root:previewStateHover .button::content,\n.button::content:hover {\n  background: value(buttonHoverBackgroundColor);\n}\n\n.root:previewStateFocus .button::content,\n.button::content:active  {\n  background: value(buttonFocusBackgroundColor);\n}\n\n.button-icon {\n  color: value(buttonIconColor);\n\n  min-width: 14px;\n  min-height: 14px;\n\n  max-width: 50px;\n  max-height: 50px;\n\n  width: value(searchIconSize);\n  height: value(searchIconSize);\n  margin:0 var(--icon-spacing);\n}\n\n.root:previewStateHover .button .button-icon,\n.button:hover .button-icon {\n  color: value(buttonHoverIconColor);\n}\n\n.button:focus .button-icon {\n  color: value(buttonHoverIconColor);\n}\n\n.root:previewStateFocus .button .button-icon,\n.button:active .button-icon {\n  color: value(buttonFocusIconColor);\n}\n\n/* --- COMPONENT BACKGROUND & BORDERS--- */\n\n.input::inputComponent {\n  background: value(inputBackgroundColor);\n}\n\n.root:previewStateHover .input::inputComponent,\n.input::inputComponent:hover {\n  background: value(inputHoverBackgroundColor);\n}\n\n.root:previewStateFocus .input::inputComponent,\n.input::inputComponent:focus-within  {\n  background: value(inputFocusBackgroundColor);\n}\n\n.root:previewStateHover .input::popoverElement,\n.root:previewStateHover .button,\n.root:hover .input::popoverElement, .root:hover .button {\n  border-width: value(inputHoverBorderWidth);\n  border-color: value(inputHoverBorderColor);\n}\n\n.root:previewStateFocus .input::popoverElement,\n.root:previewStateFocus .button,\n.root:focus-within .input::popoverElement, .root:focus-within .button {\n  border-width: value(inputFocusBorderWidth);\n  border-color: value(inputFocusBorderColor);\n}\n\n/* --- Suggestion - */\n.root:withSuggestions .input:content-visible::popoverElement {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input:content-visible::popoverContent {\n  /* Popover's content z-index should be less then popoverElement so popoverContent box-shadow will not fit in popoverElement */\n  z-index: 1000;\n\n  /* Make sure popover content is fit input width */\n  left: 0;\n  right: 0;\n}\n\n.input:content-visible::popoverElement {\n  z-index: 1001;\n}\n\n.input::popoverContent {\n  overflow: hidden;\n  border: none;\n  box-sizing: border-box;\n\n  /* popoverContent's background always should be without opacity */\n  background: getColorWithOpacity(value(inputFocusBackgroundColor), 1);\n\n  /* Set soft shadow if there is no inputShadow and borderWidth is 0 */\n  box-shadow: getValueByCondition(\n    value(softInputShadow),\n    value(inputShadow),\n    isEmptyCSSValue(\n      value(inputShadow),\n    value(inputFocusBorderWidth)\n    )\n  );\n\n  border-style: solid;\n  border-color: value(inputFocusBorderColor);\n  border-width: value(inputFocusBorderWidth);\n\n  border-radius: value(inputBorderRadius);\n\n  /* Remove top border to get rid of \"double border\" because there is input border */\n  border-top: none;\n\n  /* popoverContent border radius should set onlt for bottom border */\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n\n.input::popoverContent {\n  min-width: var(--suggestions-min-width);\n}\n\n.input::dropdownContent::dropdownOption:selected,\n.input::dropdownContent::dropdownOption:hovered {\n  /* remove default backgrounds */\n  background: none\n}\n\n/* remove backgrounds for selected state (actually there is no \"selected\" state at ui)*/\n.input::dropdownContent::dropdownOption:selected ListLayoutItem,\n.input::dropdownContent::dropdownOption:selected SuggestionHeader {\n  background: none;\n}\n\n.input::dropdownContent::dropdownOption:hovered ListLayoutItem {\n  background: value(suggestionHoverColor);\n}\n\n.input::dropdownContent::optionsContainer {\n  max-height: var(--suggestions-max-height);\n}\n\n/* set dynamic height to fit available space under the input */\n.root:withCustomSuggestionsHeight .input::dropdownContent::optionsContainer {\n  height: var(--suggestions-height);\n}\n\n.input::dropdownContent::dropdownOption SuggestionHeader {\n  cursor: default;\n}\n\n.input::dropdownContent::dropdownOption:hovered SuggestionHeader {\n  background: value(suggestionHoverColor);\n}\n\n/* .input::dropdownContent::dropdownOption:hovered SuggestionHeader::show-all-link {\n  opacity: 1;\n} */\n\n.input::dropdownContent::dropdownOption:hover {\n  background: none;\n}\n\n.root ListLayoutItem {\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.root ListLayoutItem::thumbnail {\n  width: 73px;\n  height: 55px;\n}\n\n.root ListLayoutItem::content {\n  margin-left: 12px;\n}\n\n.root ListLayoutItem::title {\n  color: value(inputTextColor);\n\n  /* font should be the same as at input but with restricted font-size */\n  font: getFontWithSizeInRange(value(inputFont), 10, 20);\n  text-decoration: none;\n  line-height: 1.5em;\n}\n\n.root ListLayoutItem::description {\n  -st-mixin:lineClamp(lineSize 1);\n  min-height: auto;\n  color: value(inputTextColor);\n  font: value(inputFont);\n  font-size: 12px;\n  line-height: 1.42em;\n  margin-top: 4px;\n}\n\n.suggestion-item-link:link, .suggestion-item-link:hover,\n.suggestion-item-link:hover, .suggestion-item-link:active {\n  text-decoration: none;\n}\n\n.root SuggestionHeader::title, .root SuggestionHeader::show-all-link {\n  /* font should be the same as at input but with restricted font-size */\n  font: getFontWithSizeInRange(value(inputFont), 10, 16);\n  color: value(inputTextColor);\n  line-height: 1.5em;\n  text-decoration: none;\n}\n\n.root SuggestionHeader::divider {\n  background: getColorWithOpacity(value(suggestionSectionDividerColor), 0.3);\n}\n\n.root SuggestionFooter {\n  font: value(inputFont);\n  color: value(inputTextColor);\n}\n\n.root SuggestionFooter::text {\n  font: value(inputFont);\n  font-size: 12px;\n}\n\n.root SuggestionFooter::icon {\n  color: value(inputFocusIconColor);\n}\n"
    },
    "/wix-ui-santa/src/components/AddressInput/AddressInput.st.css": {
      "metadata": {
        "namespace": "AddressInput2588001152",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: AddressInput;\n}\n\n:import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: DropdownOption;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.AddressInput';\n\n    /* @type COLOR_ALPHA */\n    dropdownBackgroundColor: #ffffff;\n    /* @type COLOR_ALPHA */\n    dropdownLocationIconColor: #797979;\n    /* @type BORDER_COLOR_ALPHA */\n    dropdownStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    dropdownStrokeWidth: 1;\n    /* @type BORDER_COLOR_ALPHA */\n    dropdownDividerStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    dropdownDividerStrokeWidth: 1;\n    /* @type BOX_SHADOW */\n    dropdownBoxShadow: none;\n    /* @type FONT */\n    dropdownFont: font_1;\n    /* @type COLOR */\n    dropdownTextColor: #000000;\n    /* @type COLOR */\n    dropdownHoverTextColor: #9b9b9b;\n    /* @type COLOR_ALPHA */\n    dropdownHoverBackgroundColor: rgba(44, 216, 215, .7);\n    /* @type BORDER_SIZE */\n    dropdownOptionPadding: 16px;\n\n    /* @type COLOR_ALPHA */\n    inputBackgroundColor: #f7f7f7;\n    /* @type BORDER_COLOR_ALPHA */\n    inputStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    inputStrokeWidth: 1;\n    /* @type BORDER_RADIUS */\n    inputBorderRadius: 10px;\n    /* @type BOX_SHADOW */\n    inputBoxShadow: 0 2px 0 0 #2cd8d7;\n    /* @type FONT */\n    inputFont: font_1;\n    /* @type COLOR */\n    inputTextColor: #000000;\n    /* @type COLOR */\n    inputPlaceholderTextColor: #000000;\n\n    /* @type COLOR_ALPHA */\n    inputHoverBackgroundColor: #fdf3f2;\n    /* @type BORDER_COLOR_ALPHA */\n    inputHoverStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    inputHoverStrokeWidth: 1;\n\n    /* @type COLOR_ALPHA */\n    inputFocusBackgroundColor: #ffffff;\n    /* @type BORDER_COLOR_ALPHA */\n    inputFocusStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    inputFocusStrokeWidth: 1;\n\n    /* @type COLOR_ALPHA */\n    inputErrorBackgroundColor: #ffffff; /* TODO */\n    /* @type BORDER_COLOR_ALPHA */\n    inputErrorStrokeColor: #d0001b; /* TODO */\n    /* @type BORDER_SIZE */\n    inputErrorStrokeWidth: 1; /* TODO */\n\n    /* @type COLOR_ALPHA */\n    inputDisabledBackgroundColor: #ffffff;\n    /* @type BORDER_COLOR_ALPHA */\n    inputDisabledStrokeColor: #9b9b9b;\n    /* @type BORDER_SIZE */\n    inputDisabledStrokeWidth: 1;\n    /* @type COLOR */\n    inputDisabledTextColor: #9b9b9b;\n}\n\n.root {\n    -st-extends: AddressInput;\n    -st-states: error, show-dividers, preview-input-hover, preview-input-disabled, preview-input-focus, preview-input-error, preview-list-regular, preview-list-hover, alignment(enum(left, center, right)), mobile;\n    width: 100%;\n    height: 100%;\n}\n\n.root:alignment(left)::inputComponent::nativeInput, .root:alignment(left)::dropdownContent::dropdownOption {\n    text-align: left;\n}\n\n.root:alignment(right)::inputComponent::nativeInput, .root:alignment(right)::dropdownContent::dropdownOption {\n    text-align: right;\n}\n\n.root:alignment(center)::inputComponent::nativeInput, .root:alignment(center)::dropdownContent::dropdownOption {\n    text-align: center;\n}\n\n.root [data-hook=\"popover-element\"] {\n    width: 100%;\n    height: 100%;\n}\n\n.root [data-hook=\"popover-content\"] {\n    border: none;\n    width: 100%;\n}\n\n.root::inputComponent {\n    height: 100%;\n    border-radius: value(inputBorderRadius);\n    box-shadow: value(inputBoxShadow);\n    background-color: value(inputBackgroundColor);\n    border-color: value(inputStrokeColor);\n    border-width: value(inputStrokeWidth);\n    border-style: solid;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.root::inputComponent::nativeInput {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    font: value(inputFont);\n    color: value(inputTextColor);\n    background-color: transparent;\n    padding: 10px 0;\n    border: none;\n}\n\n.root::inputComponent::nativeInput:focus {\n    outline: none;\n}\n\n.root:mobile::inputComponent::nativeInput {\n    font-size: inherit;\n}\n\n.root:content-visible::inputComponent {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.root::inputComponent:hover,\n.root:preview-input-hover::inputComponent {\n    background-color: value(inputHoverBackgroundColor);\n    border-color: value(inputHoverStrokeColor);\n    border-width: value(inputHoverStrokeWidth);\n}\n\n.root::inputComponent:focus,\n.root:preview-input-focus::inputComponent,\n.root:preview-list-regular::inputComponent,\n.root:preview-list-hover::inputComponent {\n    background-color: value(inputFocusBackgroundColor);\n    border-color: value(inputFocusStrokeColor);\n    border-width: value(inputFocusStrokeWidth);\n}\n\n.root:error::inputComponent,\n.root:preview-input-error::inputComponent {\n    background-color: value(inputErrorBackgroundColor);\n    border-color: value(inputErrorStrokeColor);\n    border-width: value(inputErrorStrokeWidth);\n}\n\n.root::inputComponent:disabled,\n.root:preview-input-disabled::inputComponent {\n    background-color: value(inputDisabledBackgroundColor);\n    border-color: value(inputDisabledStrokeColor);\n    border-width: value(inputDisabledStrokeWidth);\n    color: value(inputDisabledTextColor);\n}\n\n.root::inputComponent::nativeInput::placeholder {\n    color: value(inputPlaceholderTextColor);\n}\n\n.root::dropdownContent {\n    background-color: value(dropdownBackgroundColor);\n    border-color: value(dropdownStrokeColor);\n    border-width: value(dropdownStrokeWidth);\n    border-style: solid;\n    box-shadow: value(dropdownBoxShadow);\n    font: value(dropdownFont);\n    color: value(dropdownTextColor);\n    border-top-width: 0;\n    border-radius: value(inputBorderRadius);\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    overflow: hidden;\n}\n\n.root:mobile::dropdownContent {\n    font-size: inherit;\n}\n\n.root::dropdownContent::dropdownOption::highlight {\n    color: value(dropdownTextColor);\n    opacity: 1;\n}\n\n.root::dropdownContent::dropdownOption::nonHighlight {\n    color: value(dropdownTextColor);\n    opacity: .6;\n}\n\n.root::dropdownContent::dropdownOption {\n    /* -st-extends: DropdownOption; */\n    -st-mixin: DropdownOption(\n        selectedBackgroundColor value(dropdownBackgroundColor),\n        selectedHoverBackgroundColor value(dropdownHoverBackgroundColor)\n    );\n    padding: 5px 0;\n}\n\n.root::dropdownContent::dropdownOption:first-of-type {\n    padding-top: 10px;\n}\n\n.root::dropdownContent::dropdownOption:last-of-type {\n    padding-bottom: 10px;\n}\n\n.root:show-dividers::dropdownContent::dropdownOption {\n    border-bottom-color: value(dropdownDividerStrokeColor);\n    border-bottom-width: value(dropdownDividerStrokeWidth);\n    border-bottom-style: solid;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.root::option::optionContent {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.root::dropdownContent::dropdownOption:hover,\n.root::dropdownContent::dropdownOption:hovered,\n.root::dropdownContent::dropdownOption:selected:hover,\n.root::dropdownContent::dropdownOption:selected:hovered,\n.root:preview-list-hover::dropdownContent::dropdownOption:first-of-type {\n    background: value(dropdownHoverBackgroundColor);\n    color: value(dropdownHoverTextColor);\n}\n\n.root::dropdownContent::dropdownOption:last-of-type {\n    border-bottom-width: 0;\n}\n\n.locationIcon path {\n    fill: value(dropdownLocationIconColor);\n}\n\n.root::iconWrapper {\n    padding: 0 8px 0 0;\n}\n\n.root:alignment(right)::iconWrapper {\n    padding: 0 0 0 8px;\n}\n\n.root:alignment(right)::option {\n    flex-direction: row-reverse;\n}\n\n.root:alignment(center)::option {\n    justify-content: center;\n}\n\n.root:alignment(center)::option::optionContent {\n    flex: inherit;\n}\n\n.dropdownFooter {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    box-sizing: border-box;\n    padding: 12px;\n}\n\n.googleBanner {\n    width: 144px;\n    height: 18px;\n}"
    },
    "/wix-ui-santa/src/components/TimePicker/TimePicker.st.css": {
      "metadata": {
        "namespace": "TimePicker3828613967",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: TimePicker;\n}\n\n:vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.TimePicker'; \n\n  /* @type COLOR_ALPHA */\n  backgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  iconColor: #000000;\n\n  /* @type COLOR_ALPHA */\n  borderColor: #919191;\n  /* @type BORDER_SIZE */\n  borderWidth: 1px;\n\n  /* @type BORDER_RADIUS */\n  borderRadius: 0px;\n\n  /* @type BOX_SHADOW */\n  boxShadow: 0 0px 0px rgba(0, 0, 0, .7);\n\n  /* @type FONT */\n  textFont: font_1;\n  /* @type TEXT_COLOR */\n  textColor: #000000;\n  /* @type TEXT_COLOR */\n  placeholderTextColor: #000000;\n\n  /* @type COLOR_ALPHA */\n  hoverBackgroundColor: #F2FAF9;\n  /* @type COLOR_ALPHA */\n  hoverBorderColor: #000000;\n  /* @type BORDER_SIZE */\n  hoverBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  focusBackgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  focusBorderColor: #000000;\n  /* @type BORDER_SIZE */\n  focusBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  errorBackgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  errorBorderColor: #ff4040;\n  /* @type BORDER_SIZE */\n  errorBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  disabledBackgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  disabledBorderColor: #DBDBDB;\n  /* @type BORDER_SIZE */\n  disabledBorderWidth: 1px;\n  /* @type TEXT_COLOR */\n  disabledTextColor: #D4D4D4;\n}\n\n.root {\n  -st-states: error, disabled, alignment(enum(left, center, right)), previewState(enum(hover, focus, error, disabled)), isFocused, isMobile;\n  height: 100%;\n}\n\n.dropdown-root, .timepicker-root {\n  border-width: value(borderWidth);\n  border-color: value(borderColor);\n  border-style: solid;\n  border-radius: value(borderRadius);\n  background-color: value(backgroundColor);\n  box-shadow: value(boxShadow);\n  box-sizing: border-box;\n  color: value(textColor);\n  height: 100%;\n}\n\n.root:hover .dropdown-root,\n.root:hover .timepicker-root,\n.root:hover .timepicker-root::nativeInput,\n.root:previewState(hover) .dropdown-root,\n.root:previewState(hover) .timepicker-root,\n.root:previewState(hover) .timepicker-root::nativeInput {\n  background-color: value(hoverBackgroundColor);\n  border-color: value(hoverBorderColor);\n  border-width: value(hoverBorderWidth);\n}\n\n.dropdown-root:focus,\n.timepicker-root:focus,\n.timepicker-root:focus::nativeInput,\n.root:previewState(focus) .dropdown-root,\n.root:previewState(focus) .timepicker-root,\n.root:previewState(focus) .timepicker-root::nativeInput,\n.root:isFocused .dropdown-root {\n  background-color: value(focusBackgroundColor);\n  border-color: value(focusBorderColor);\n  border-width: value(focusBorderWidth);\n}\n\n.root:disabled .dropdown-root,\n.root:disabled .timepicker-root,\n.root:disabled .timepicker-root::nativeInput,\n.root:previewState(disabled) .dropdown-root,\n.root:previewState(disabled) .timepicker-root,\n.root:previewState(disabled) .timepicker-root::nativeInput {\n  background-color: value(disabledBackgroundColor);\n  border-color: value(disabledBorderColor);\n  border-width: value(disabledBorderWidth);\n  color: value(disabledTextColor);\n}\n\n.root:error .dropdown-root,\n.root:error .timepicker-root,\n.root:error .timepicker-root::nativeInput,\n.root:previewState(error) .dropdown-root,\n.root:previewState(error) .timepicker-root,\n.root:previewState(error) .timepicker-root::nativeInput {\n  background-color: value(errorBackgroundColor);\n  border-color: value(errorBorderColor);\n  border-width: value(errorBorderWidth);\n}\n\n.root:alignment(center) .dropdown-root,\n.root:alignment(center) .timepicker-root::nativeInput {\n  text-align: center;\n}\n\n.root:alignment(right) .dropdown-root,\n.root:alignment(right) .timepicker-root {\n  flex-direction: row-reverse;\n}\n\n.root:alignment(right) .timepicker-root::tickers {\n  margin-right: 0;\n  margin-left: 20px;\n}\n\n.root:alignment(right) .dropdown-root,\n.root:alignment(right) .timepicker-root::nativeInput {\n  text-align: right;\n}\n\n.root:alignment(right) .dropdown-root svg {\n  margin-right: 0px;\n  margin-left: 20px;\n}\n\n.timepicker-root {\n  -st-extends: TimePicker;\n  display: inline-flex;\n  height: 100%;\n  width: 100%;\n}\n\n.timepicker-root::nativeInput {\n  width: 100%;\n  font: value(textFont);\n  color: inherit;\n  border: none;\n  outline: none;\n  margin: 0px;\n  padding: 8px 0;\n  background-color: value(backgroundColor);\n  border-radius: value(borderRadius);\n  min-width: 0;\n}\n\n.root:isMobile .timepicker-root::nativeInput {\n  font-size: inherit;\n}\n\n.timepicker-root::tickers {\n  margin-right: 20px;\n  padding: 3px 0px;\n  justify-content: center;\n}\n\n.timepicker-root::tickers::ticker {\n  color: value(iconColor);\n  flex-grow: initial;\n  height: 9px;\n  max-height: 9px;\n}\n\n.timepicker-root::tickers::ticker:first-of-type {\n  margin-bottom: 6px;\n}\n\n.dropdown-root {\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  font: value(textFont);\n}\n\n.dropdown-root [data-hook=\"timepicker-dropdown-value\"], .dropdown-root [data-hook=\"timepicker-dropdown-placeholder\"] {\n  flex: 1;\n  padding: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.dropdown-root [data-hook=\"timepicker-dropdown-placeholder\"] {\n  color: value(placeholderTextColor);\n}\n\n.dropdown-root select {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: menulist-button;\n}\n\n.dropdown-root svg {\n  margin-right: 20px;\n  color: value(iconColor);\n}\n"
    },
    "/wix-ui-santa/src/components/SignatureInput/SignatureInput.st.css": {
      "metadata": {
        "namespace": "SignatureInput2615459075",
        "depth": 3
      },
      "content": "/* prettier-ignore */\n:vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.SignatureInput'; \n\n  /* @type COLOR_ALPHA */\n  padBackground: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundHover: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundFocus: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundError: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundDisabled: color_8;\n\n  /* @type COLOR_ALPHA */\n  padLineColor: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorHover: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorFocus: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorError: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorDisabled: color_2;\n\n  /* @type BORDER_SIZE */\n  padLineWidth: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthHover: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthFocus: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthError: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthDisabled: 3px;\n\n  /* @type COLOR */\n  signatureColor: color_2;\n\n  /* @type TEXT_SIZE */\n  signatureSize: 1px;\n\n  /* @type COLOR_ALPHA */\n  padBorderColor: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorHover: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorFocus: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorError: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorDisabled: color_2;\n\n  /* @type BORDER_SIZE */\n  padBorderWidth: 1px;\n  /* @type BORDER_SIZE */\n  padBorderWidthHover: 1px;\n  /* @type BORDER_SIZE */\n  padBorderWidthFocus: 1px;\n  /* @type BORDER_SIZE */\n  padBorderWidthError: 1px;\n  /* @type BORDER_SIZE */\n  padBorderWidthDisabled: 1px;\n\n  /* @type BORDER_RADIUS */\n  padBorderRadius: 12px;\n\n  /* @type BOX_SHADOW */\n  padBoxShadow: none;\n\n  /* @type TEXT_COLOR */\n  titleColor: color_2;\n  /* @type TEXT_COLOR */\n  titleColorDisabled: color_2;\n\n  /* @type TEXT_COLOR */\n  titleAsteriskColor: color_2;\n  /* @type TEXT_COLOR */\n  titleAsteriskColorDisabled: color_2;\n\n  /* @type FONT */\n  titleFont: font_1;\n  /* @type FONT */\n  titleFontDisabled: font_1;\n\n  /* @type TEXT_COLOR */\n  clearButtonColor: color_14;\n  /* @type TEXT_COLOR */\n  clearButtonColorDisabled: color_14;\n\n  /* @type FONT */\n  clearButtonFont: font_9;\n  /* @type FONT */\n  clearButtonFontDisabled: font_9;\n}\n\n.root {\n  -st-states: direction(enum(rtl, ltr)), preview-mode(string), required, error,\n    disabled, focus;\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n}\n\n.root * {\n  box-sizing: border-box;\n}\n\n.root:direction(rtl) {\n  direction: rtl;\n}\n\n.root:direction(ltr) {\n  direction: ltr;\n}\n\n.title {\n  margin-top: 0;\n  color: value(titleColor);\n  font: value(titleFont);\n}\n\n.root:disabled .title,\n.root:preview-mode(disabled) .title {\n  color: value(titleColorDisabled);\n  font: value(titleFontDisabled);\n}\n\n.root:required .title::after {\n  content: '*';\n  color: value(titleAsteriskColor);\n}\n\n.root:required:disabled .title::after,\n.root:required:preview-mode(disabled) .title::after {\n  color: value(titleAsteriskColorDisabled);\n}\n\n.padContainer {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  position: relative;\n  width: 100%;\n  background: value(padBackground);\n  border-color: value(padBorderColor);\n  border-width: value(padBorderWidth);\n  border-style: solid;\n  box-shadow: value(padBoxShadow);\n}\n\n.padContainer,\n.pad {\n  border-radius: value(padBorderRadius);\n}\n\n.pad {\n  width: 100%;\n}\n\n.root .padContainer:hover,\n.root:preview-mode(hover) .padContainer {\n  border-color: value(padBorderColorHover);\n  border-width: value(padBorderWidthHover);\n  background: value(padBackgroundHover);\n}\n\n.root:focus .padContainer,\n.root:preview-mode(focus) .padContainer {\n  border-color: value(padBorderColorFocus);\n  border-width: value(padBorderWidthFocus);\n  background: value(padBackgroundFocus);\n}\n\n.root:error .padContainer,\n.root:preview-mode(error) .padContainer {\n  border-color: value(padBorderColorError);\n  border-width: value(padBorderWidthError);\n  background: value(padBackgroundError);\n}\n\n.root:disabled .padContainer,\n.root:preview-mode(disabled) .padContainer {\n  border-color: value(padBorderColorDisabled);\n  border-width: value(padBorderWidthDisabled);\n  background: value(padBackgroundDisabled);\n}\n\n.padContainer::after {\n  content: '';\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n  border-top-style: solid;\n  border-top-width: value(padLineWidth);\n  border-color: value(padLineColor);\n  pointer-events: none;\n}\n\n.root .padContainer:hover::after,\n.root:preview-mode(hover) .padContainer::after {\n  border-top-width: value(padLineWidthHover);\n  border-color: value(padLineColorHover);\n}\n\n.root:focus .padContainer::after,\n.root:preview-mode(focus) .padContainer::after {\n  border-top-width: value(padLineWidthFocus);\n  border-color: value(padLineColorFocus);\n}\n\n.root:error .padContainer::after,\n.root:preview-mode(error) .padContainer::after {\n  border-top-width: value(padLineWidthError);\n  border-color: value(padLineColorError);\n}\n\n.root:disabled .padContainer::after,\n.root:preview-mode(disabled) .padContainer::after {\n  border-top-width: value(padLineWidthDisabled);\n  border-color: value(padLineColorDisabled);\n}\n\n.clearButton {\n  display: inline-block;\n  margin-top: 8px;\n  touch-action: manipulation;\n  align-self: flex-end;\n  font: value(clearButtonFont);\n  color: value(clearButtonColor);\n}\n\n.root:disabled .clearButton,\n.root:preview-mode(disabled) .clearButton {\n  font: value(clearButtonFontDisabled);\n  color: value(clearButtonColorDisabled);\n}\n\n/* \n * The following variables are used only in javascript to set the\n * canvas drawing color and width. The variables have to be used in\n * at least one class in order to appear in the custom design panel\n * even if the class is not used\n*/\n.unused {\n  stroke: value(signatureColor);\n  stroke-width: value(signatureSize);\n}\n"
    },
    "/wix-ui-santa/src/components/FileUploaderNew/FileUploaderNew.st.css": {
      "metadata": {
        "namespace": "FileUploaderNew3941264883",
        "depth": 1
      },
      "content": ":vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.FileUploaderNew';\n\n  /* @type BG_COLOR_ALPHA */\n  bg_d: color_18;\n  /* @type BG_COLOR_ALPHA */\n  bg_e: color_1;\n  /* @type BG_COLOR_ALPHA */\n  bg_f: color_18;\n  /* @type BG_COLOR_ALPHA */\n  btn_bg: color_1;\n  /* @type BG_COLOR_ALPHA */\n  btn_bg_h: color_1;\n\n  /* @type TEXT_COLOR */\n  btn_txt: color_6;\n  /* @type TEXT_COLOR */\n  btn_txt_h: color_6;\n  /* @type TEXT_COLOR */\n  txt_d: color_6;\n  /* @type TEXT_COLOR */\n  txt_e: color_6;\n  /* @type TEXT_COLOR */\n  txt_f: color_28;\n\n  /* @type BORDER_COLOR_ALPHA */\n  brd_d: color_6;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_e: color_6;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_f: color_6;\n  /* @type BORDER_COLOR_ALPHA */\n  btn_brd: color_6;\n  /* @type BORDER_COLOR_ALPHA */\n  btn_brd_h: color_6;\n  /* @type BORDER_RADIUS */\n  btn_rd: 0;\n  /* @type BORDER_SIZE */\n  brw_d: 1px;\n  /* @type BORDER_SIZE */\n  brw_e: 1px;\n  /* @type BORDER_SIZE */\n  brw_f: 0;\n  /* @type BORDER_SIZE */\n  btn_brw: 1px;\n  /* @type BORDER_SIZE */\n  btn_brw_h: 1px;\n  /* @type BOX_SHADOW */\n  btn_shd: 0 0 0 rgba(0, 0, 0, 0);\n\n  /* @type COLOR_ALPHA */\n  txtlblrq: transparent;\n  /* @type FONT */\n  btn_fnt: font_9;\n  /* @type FONT */\n  fntlbl: font_8;\n  /* @type COLOR_ALPHA */\n  txtlbl: color_15;\n\n  /* @type TEXT_COLOR */\n  x_file_txt_h: color_6;\n  /* @type BG_COLOR_ALPHA */\n  file_bg_h: color_16;\n  /* @type TEXT_COLOR */\n  x_file_txt_e: color_6;\n  /* @type TEXT_COLOR */\n  x_file_txt: color_6;\n  /* @type TEXT_COLOR */\n  x_file_txt_f: color_6;\n  /* @type TEXT_COLOR */\n  x_file_txt_d: color_6;\n  /* @type FONT */\n  file_fnt: font_9;\n}\n\n.root {\n  -st-states:\n    disabled, error, required,\n    previewState(enum(regular, disabled, error, hover, focus)),\n    buttonAlignment(enum(rtl, ltr)),\n    filesAlignment(enum(left, center, right));\n\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  position: relative;\n}\n\n.root input[type=file] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n}\n\n.chooseFileButton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  cursor: pointer;\n  background-color: value(btn_bg);\n  border-style: solid;\n  border-color: value(btn_brd);\n  border-width: value(btn_brw);\n  border-radius: value(btn_rd);\n  box-shadow: value(btn_shd);\n  font: value(btn_fnt);\n  color: value(btn_txt);\n}\n\n.chooseFileButton .plusIcon {\n  color: inherit;\n}\n\n.chooseFileButton .buttonLabel {\n  font: inherit;\n  color: inherit;\n  display: inline-block;\n  position: relative;\n  white-space: nowrap;\n}\n\n.noLabel .chooseFileButton .buttonLabel {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.root:previewState(hover) .chooseFileButton,\n.chooseFileButton:hover {\n  background-color: value(btn_bg_h);\n  border-color: value(btn_brd_h);\n  border-width: value(btn_brw_h);\n  color: value(btn_txt_h);\n}\n\n.root:previewState(focus) .chooseFileButton,\n.chooseFileButton:focus {\n  background-color: value(bg_f);\n  border-color: value(brd_f);\n  border-width: value(brw_f);\n  color: value(txt_f);\n}\n.root:disabled .chooseFileButton,\n.root:previewState(disabled) .chooseFileButton,\n.chooseFileButton[disabled] {\n  background-color: value(bg_d);\n  border-color: value(brd_d);\n  border-width: value(brw_d);\n  cursor: default;\n  color: value(txt_d);\n}\n\n.root:error .chooseFileButton,\n.root:previewState(error) .chooseFileButton {\n  color: value(txt_e);\n  background-color: value(bg_e);\n  border-color: value(brd_e);\n  border-width: value(brw_e);\n}\n\n.root:buttonAlignment(ltr) .chooseFileButton .buttonLabel {\n  padding-left: 8px;\n}\n\n.root:buttonAlignment(rtl) .chooseFileButton {\n  direction: rtl;\n}\n\n.root:buttonAlignment(rtl) .chooseFileButton .buttonLabel {\n  padding-right: 8px;\n  direction: ltr;\n}\n\n.label {\n  font: value(fntlbl);\n  color: value(txtlbl);\n  word-break: break-word;\n  display: inline-block;\n  line-height: 1;\n}\n\n.root:required .label::after {\n  content: \" *\";\n  color: value(txtlblrq);\n}\n\n/* UploadName */\n.files {\n  width: 100%;\n  margin-top: 14px;\n  min-width: 90px;\n}\n\n.uploadName {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 17px;\n  color: value(x_file_txt);\n  font: value(file_fnt);\n}\n\n.uploadName .xIcon {\n  display: inline-block;\n  cursor: pointer;\n  height: 17px;\n  width: 17px;\n  min-width: 16px;\n  position: relative;\n  color: inherit;\n}\n\n.uploadName .fileName {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: inherit;\n  direction: ltr;\n  padding-right: 3px;\n}\n\n.root:previewState(hover) .uploadName .fileName,\n.uploadName .fileName:hover {\n  overflow: visible;\n}\n\n.uploadNamePlaceholder {\n  opacity: 0.7;\n}\n\n.uploadNamePlaceholder.hide {\n  visibility: hidden;\n}\n\n.root:previewState(hover) .uploadName,\n.uploadName:hover {\n  color: value(x_file_txt_h);\n}\n\n.root:previewState(hover) .uploadName .fileName,\n.uploadName:hover .fileName {\n  background-color: value(file_bg_h);\n}\n\n.root:focus .uploadName,\n.root:previewState(focus) .uploadName {\n  color: value(x_file_txt_e);\n}\n\n.root:error .uploadName,\n.root:previewState(error) .uploadName {\n  color: value(x_file_txt_e);\n}\n\n.root:disabled .uploadName,\n.root:previewState(disabled) .uploadName {\n  color: value(x_file_txt_d);\n}\n\n.root:filesAlignment(right) .uploadName {\n  direction: rtl;\n}\n\n.root:filesAlignment(right) .uploadName .xIcon {\n  margin-left: 8px;\n}\n\n.root:filesAlignment(left) .uploadName .xIcon {\n  margin-right: 8px;\n}\n\n.root:filesAlignment(center) .uploadName {\n  justify-content: center;\n}\n\n.root:filesAlignment(center) .uploadName .xIcon {\n  margin-right: 8px;\n}\n"
    },
    "/wix-ui-santa/src/components/SelectionTagsList/SelectionTagsList.st.css": {
      "metadata": {
        "namespace": "SelectionTagsList225166216",
        "depth": 7
      },
      "content": ":import {\n  -st-from: 'wix-ui-core/index.st.css';\n  -st-named: TagsList, Tag;\n}\n\n/**\n * The component's design panel is auto generated according to variables stated in :vars section\n * For available variable types see https://github.com/wix-private/santa/wiki/Skins#2-using-skin-parameters\n * For advanced styling of the design panel see https://github.com/wix-private/santa-editor/blob/master/santa-editor/conf/data/advancedStyleSkinsStaticConfig.json\n * For setting the custom design panel title see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/addPanelData/src/main/designData/componentsLiveSections.js\n * For setting the custom desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/customizeDesign.js\n * For setting the desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/design.js\n */\n:vars {\n  /**\n  * Currently needed for skin based component (using the editor's custom design panel)\n  * The SKINS var is used to identify which variables are relevant for each skin name, you can use values delimited by `,` \n  * To use same variables for multiple skins.\n  */\n  /* @type SKINS */\n  skins: 'wixui.skins.SelectionTagsList';\n\n  /* @type BG_COLOR_ALPHA */\n  bg: color_8;\n  /* @type BG_COLOR_ALPHA */\n  bg_h: color_8;\n  /* @type BG_COLOR_ALPHA */\n  bg_e: color_8;\n  /* @type BG_COLOR_ALPHA */\n  bg_c: color_8;\n\n  /* @type TEXT_COLOR */\n  txt: color_1;\n  /* @type TEXT_COLOR */\n  txt_h: color_1;\n  /* @type TEXT_COLOR */\n  txt_e: color_1;\n  /* @type TEXT_COLOR */\n  txt_c: color_1;\n\n  /* @type SIZE */\n  pd: 0;\n\n  /* @type BORDER_SIZE */\n  brw: 0;\n  /* @type BORDER_SIZE */\n  brw_h: 0;\n  /* @type BORDER_SIZE */\n  brw_e: 0;\n  /* @type BORDER_SIZE */\n  brw_c: 0;\n\n  /* @type BORDER_COLOR_ALPHA */\n  brd: color_8;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_h: color_8;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_e: color_8;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_c: color_8;\n\n  /* @type BORDER_RADIUS */\n  rd: 0;\n\n  /* @type BOX_SHADOW */\n  shd: 0 0 0 rgba(0, 0, 0, 0);\n\n  /* @type FONT */\n  fnt: font_9;\n\n  /* @type SIZE */\n  ms: 0;\n}\n\n.root {\n  -st-states: hover, error, checked;\n}\n\n/**\n * Stylable does not support syntax like -value(arg)\n */\n\n.tagList {\n  width: calc(100% + 2 * value(ms));\n  margin-left: calc(-1 * value(ms));\n  margin-top: calc(-1 * value(ms));\n  margin-bottom: calc(-1 * value(ms));\n  min-width: 50px;\n}\n\n.tag {\n  box-shadow: value(shd);\n  font: value(fnt);\n  margin: value(ms);\n  color: value(txt);\n  background-color: value(bg);\n  padding: value(pd);\n  border: calc(value(pd) - value(brw)) solid value(brd);\n  border-radius: value(rd);\n}\n\n.tag.isChecked{\n  color: value(txt_c);\n  background-color: value(bg_c);\n  border: value(brw_c) solid value(brd_c);\n}\n\n.tag:hover,\n.tag[data-preview~='hover'],\n.tag:hover.isChecked,\n.tag[data-preview~='hover'].isChecked  {\n  color: value(txt_h);\n  background-color: value(bg_h);\n  border: calc(value(pd) - value(brw_h)) solid value(brd_h);\n}\n\n.tag[data-error=\"true\"],\n.tag[data-preview~='error'] {\n  color: value(txt_e);\n  background-color: value(bg_e);\n  border: calc(value(pd) - value(brw_e)) solid value(brd_e);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/time-picker/TimePicker.st.css": {
      "metadata": {
        "namespace": "TimePicker445655367",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"../input/Input.st.css\";\n  -st-default: Input;\n}\n\n:import {\n  -st-from: \"./Tickers.st.css\";\n  -st-default: Tickers;\n}\n\n.root {\n  -st-extends: Input;\n  -st-states: focus;\n}\n\n.tickers {\n  -st-extends: Tickers;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/StylableButton.st.css": {
      "metadata": {
        "namespace": "StylableButton3172224474",
        "depth": 1
      },
      "content": ".root {\n    -archetype: box;\n    -st-states: error, disabled;\n    cursor: pointer;\n    border: none;\n    display: block;\n    min-width: 10px;\n    min-height: 10px;\n    box-sizing: border-box;\n    padding: 0px;\n}\n\n.root:disabled {\n  pointer-events: none;\n}\n\n.link {\n    -archetype: box;\n    text-decoration: none;\n    box-sizing: border-box;\n    color: black;\n} \n\n.container { \n    display: flex;\n    flex-basis: auto;\n    justify-content: center;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    transition: all 0.2s ease;\n}\n\n.label {\n    -archetype: text;\n    -controller-part-type: LayoutChildDisplayDropdown, LayoutFlexChildSpacing(first);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    min-width: 1.8em;\n    max-width: 100%;\n    transition: inherit;\n}\n\n.icon {\n    -archetype: icon;\n    -controller-part-type: LayoutChildDisplayDropdown, LayoutFlexChildSpacing(last);\n    min-width: 1px; \n    height: 50px;\n    transition: inherit;\n}\n\n.icon > div, .icon svg {\n    width: inherit;\n    height: inherit;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton1.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton1-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     border-radius: 100px;\n     padding: 4px 6px;\n     background: #323232;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n}\n .root:hover {\n     background: #FFFFFF;\n     border: 1px solid rgb(50, 50, 50);\n}\n .root:hover::label {\n     color: #323232;\n}\n .root:hover::icon {\n     fill: #323232;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #FFFFFF;\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: futura-lt-w01-book,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     font-size: 13px;\n     color: #FFFFFF;\n     margin: 0px 3px 0px 0px;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton10.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton10-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     border-radius: 0px;\n     box-shadow: 2.12px 2.12px 4px rgba(50,50,50,0);\n     background: #AF60D8;\n     border-width: 0px;\n     border: 0px solid rgb(254, 232, 135);\n}\n .root:hover {\n     background: #FEE887;\n}\n .root:hover::label {\n     color: #AF60D8;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 14px;\n     height: 14px;\n     fill: #FEE887;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: playfairdisplay-bold,\\\"playfair display\\\",serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     letter-spacing: 0.05em;\n     font-size: 14px;\n     color: #FEE887;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton11.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton11-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     border-radius: 100px;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(255, 208, 100, 0.6) 0%, rgba(255, 208, 100, 0.6) 100%), repeat padding-box border-box 0%/60% scroll url('https://static.wixstatic.com/media/11062b_ae6a248fb44a41ff998fa4bb245dd70d~mv2.png'), #FFD064;\n}\n .root:hover {\n     border: 2px solid #FFD064;\n     background: #FFFFFF;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     display: initial;\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     fill: #323232;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: futura-lt-w01-book,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     margin: 0px 3px 0px 0px;\n     font-size: 13px;\n     color: #323232;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton12.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton12-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     border-radius: 100px;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(251, 212, 225, 0.6) 0%, rgba(251, 212, 225, 0.6) 100%), repeat padding-box border-box 51% 49%/60% scroll url('https://static.wixstatic.com/media/11062b_017372245417456bbcd2e558ed667fde~mv2.png'), #FBD4E1;\n}\n .root:hover {\n     background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(251, 212, 225, 0.6) 0%, rgba(251, 212, 225, 0.6) 100%), repeat padding-box border-box 50% 51%/72% scroll url('https://static.wixstatic.com/media/11062b_017372245417456bbcd2e558ed667fde~mv2.png'), #FBD4E1;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 14px;\n     height: 14px;\n     fill: #323232;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: poppins-extralight,poppins,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     color: #323232;\n     font-size: 14px;\n     font-weight: 400;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton2.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton2-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     border: 1px solid rgb(50, 50, 50);\n     background: #FFFFFF;\n}\n .root:hover {\n     background: #323232;\n}\n .root:hover::label {\n     color: #FFFFFF;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #FFFFFF;\n     width: 14px;\n     height: 14px;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-weight: 300;\n     color: #323232;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     font-family: playfairdisplay-bold,\\\"playfair display\\\",serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton3.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton3-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     background: #B6F3E8;\n     border: 0px solid rgb(31, 44, 243);\n}\n .root:hover {\n     border: 1px solid #1F2CF3;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #1F2CF3;\n     width: 10px;\n     height: 10px;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-weight: 300;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #1F2CF3;\n     font-family: oswald-medium,oswald,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton4.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton4-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     border-radius: 100px;\n     background: #FFFFFF;\n     border: 1px solid rgb(31, 44, 243);\n     box-shadow: 4.24px 4.24px 0 rgb(31, 44, 243);\n}\n .root:hover {\n     border: 1px solid #1F2CF3;\n     box-shadow: 4.24px 4.24px 0 rgba(31,44,243,0);\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #1F2CF3;\n     width: 10px;\n     height: 10px;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-weight: 300;\n     color: #1F2CF3;\n     letter-spacing: 0.05em;\n     font-size: 13px;\n     font-family: raleway-semibold,raleway,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton5.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton5-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     border-radius: 0px;\n     background: #B6F3E8;\n     border: 0px solid rgb(31, 44, 243);\n     box-shadow: 4.24px 4.24px 0 rgb(31, 44, 243);\n}\n .root:hover {\n     background: #1F2CF3;\n     box-shadow: 4.24px 4.24px 0 #B6F3E8;\n}\n .root:hover::icon {\n     fill: #B6F3E8;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #1F2CF3;\n     width: 24px;\n     height: 24px;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: oswald-medium,oswald,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #1F2CF3;\n     display: none;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton6.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton6-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     background: linear-gradient(309deg, #1e34e9 0%, #f89ba6 100%);\n     border: 0px solid rgba(255,255,255,0);\n}\n .root:hover {\n     border: 2px solid;\n     border-width: 2px;\n     border-image: linear-gradient(292deg, #1e34e9 0%, #f89ba6 100%) 1 / 2px stretch;\n     background: #FFFFFF;\n}\n .root:hover::label {\n     color: #323232;\n}\n .root:hover::icon {\n     fill: #323232;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     fill: #FFFFFF;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: avenir-lt-w01_85-heavy1475544,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     margin: 0px 3px 0px 0px;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #FFFFFF;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton7.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton7-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     background: #9CA7F7;\n     border: 4px double #FFFFFF;\n}\n .root:hover::icon {\n     display: initial;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     fill: #FFFFFF;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: avenir-lt-w01_35-light1475496,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     margin: 0px 3px 0px 0px;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #FFFFFF;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton8.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton8-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     background: #FF7934;\n     border-radius: 100px;\n     border: 1px solid #FF7934;\n     box-shadow: 2.12px 2.12px 4px rgba(50, 50, 50, 0);\n}\n .root:hover {\n     background: #FFFFFF;\n     box-shadow: 2.12px 2.12px 4px rgba(50,50,50,0);\n}\n .root:hover::icon {\n     fill: #323232;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 24px;\n     height: 24px;\n     fill: #FFFFFF;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: playfairdisplay-bold,\\\"playfair display\\\",serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #1F2CF3;\n     display: none;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton9.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton9-StylableButton3172224474",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     background: #FFFFFF;\n     border-radius: 0px;\n     box-shadow: 2.12px 2.12px 4px rgba(50,50,50,0);\n     border: 2px solid;\n     border-width: 2px;\n     border-image: linear-gradient(150deg, #eaff94 0%, #2bc276 100%) 1 / 2px stretch;\n}\n .root:hover {\n     background: linear-gradient(150deg, #eaff94 0%, #2bc276 100%);\n     border-width: 0px;\n     border: 0px solid rgba(255, 255, 255, 0);\n}\n .root:hover::label {\n     color: #FFFFFF;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 14px;\n     height: 14px;\n     fill: #323232;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif,HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n     font-weight: 300;\n     letter-spacing: 0.05em;\n     color: #323232;\n     display: initial;\n     font-size: 14px;\n}\n"
    },
    "/wix-ui-santa/src/components/VideoPlayer/VideoPlayer.st.css": {
      "metadata": {
        "namespace": "VideoPlayer4111471387",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Video\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.VideoPlayer';\n\n    /* @type COLOR_ALPHA */\n    backgroundColor: color_10;\n\n    /* @type FONT */\n    font: font_8;\n\n    /* @type COLOR */\n    fontColor: color_2;\n\n    /* @type BORDER_COLOR_ALPHA */\n    borderColor: color_2;\n\n    /* @type BORDER_SIZE */\n    borderSize: 0;\n\n    /* @type BOX_SHADOW */\n    boxShadow: none;\n\n    /* @type TEXT_SIZE */\n    textSizeScale: 1px;\n\n    /* @type BORDER_SIZE */\n    playButtonSize: 50px;\n\n    /* @type BORDER_SIZE */\n    playButtonMobileSize: 30px;\n}\n\n.root {\n    -st-extends: Video;\n    -st-states: isMobileView, isDesktopView, isTitleExists;\n    box-shadow: value(boxShadow);\n    border: value(borderSize) solid value(borderColor);\n    margin-top: calc(-1 * value(borderSize));\n    margin-left: calc(-1 * value(borderSize));\n}\n\n/* title */\n\n.root::title {\n    font: value(font);\n    color: value(fontColor);\n    margin: 0 0 15px;\n    padding: 0 .2em;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    max-height: 2.8em;\n}\n\n.root:isMobileView::title {\n    font-size: calc(18 * value(textSizeScale));\n    margin: 0 0 10px;\n}\n\n/* overlay */\n\n.root::overlay {\n    background-color: value(backgroundColor);\n    padding: 0 10%;\n    transition: opacity .2s ease;\n}\n\n/* play button */\n\n.root .playButton {\n    display: block;\n    width: value(playButtonSize);\n    height: value(playButtonSize);\n    padding: 0;\n    border: 0;\n    background: transparent;\n    box-sizing: border-box;\n    cursor: pointer;\n    transition: opacity .2s ease;\n}\n\n.root .playButton:hover {\n    opacity: .8;\n}\n\n.root:isMobileView .playButton {\n    width: value(playButtonMobileSize);\n    height: value(playButtonMobileSize);\n}\n\n.playButton circle {\n    stroke: value(fontColor);\n}\n\n.playButton path {\n    fill: value(fontColor);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/pagination/Pagination.st.css": {
      "metadata": {
        "namespace": "Pagination2065116070",
        "depth": 1
      },
      "content": ".button-common-mixin {\n    display: inline-flex;\n    flex-shrink: 0;\n}\n\n.root {\n    -st-states: disabled, error;\n    display: inline-flex;\n    user-select: none;\n}\n\n.navButton {\n    -st-mixin: button-common-mixin;\n    -st-states: disabled;\n}\n\n.navButton:not(.disabled) {\n    cursor: pointer;\n}\n\n.navButtonFirst {  order: 1;  }\n.navButtonPrevious {  order: 2;  }\n.navButtonNext {  order: 4;  }\n.navButtonLast {  order: 5;  }\n\n.pageStrip {\n    order: 3;\n    overflow-x: hidden;\n}\n\n.pageStripInner {\n    display: flex;\n}\n\n.pageStripTemplate {\n    height: 0;\n    overflow: hidden;\n}\n\n.pageButton {\n    -st-mixin: button-common-mixin;\n    cursor: pointer;\n}\n\n.currentPage {\n    -st-mixin: button-common-mixin;\n}\n\n.gap {\n    -st-mixin: button-common-mixin;\n}\n\n.pageForm {\n    display: flex;\n    order: 3;\n}\n\n.compact {\n    -st-extends: pageForm;\n}\n\n.pageInput {}\n.totalPages {}\n.slash {}\n"
    },
    "/wix-ui-santa/src/components/Pagination/Pagination.st.css": {
      "metadata": {
        "namespace": "Pagination3298768303",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Pagination\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Pagination'; \n\n        /* PAGES MODE */\n    /* @type COLOR_ALPHA */\n    selectedPageBG: color_22;\n    /* @type BORDER_COLOR_ALPHA */\n    selectedPageBorderColor: color_26;\n    /* @type BORDER_SIZE */\n    selectedPageBorderWidth: 0;\n    /* @type TEXT_COLOR */\n    selectedPageTextColor: color_25;\n    /* @type TEXT_COLOR */\n    pageNumbersTextColor: color_6;\n\n\n        /* INPUT MODE */\n    /* @type COLOR_ALPHA */\n    pageInputBG: color_23;\n    /* @type BORDER_COLOR_ALPHA */\n    pageInputBorderColor: color_27;\n    /* @type BORDER_SIZE */\n    pageInputBorderWidth: 0;\n    /* @type TEXT_COLOR */\n    pageInputTextColor: color_26;\n    /* @type TEXT_COLOR */\n    totalPagesTextColor: color_7;\n    /* @type COLOR_ALPHA */\n    pageInputFocusBG: color_8;\n    /* @type BORDER_COLOR_ALPHA */\n    pageInputFocusBorderColor: color_38;\n    /* @type BORDER_SIZE */\n    pageInputFocusBorderWidth: 3;\n    /* @type COLOR_ALPHA */\n    pageInputErrorBG: color_2;\n    /* @type BORDER_COLOR_ALPHA */\n    pageInputErrorBorderColor: color_22;\n    /* @type BORDER_SIZE */\n    pageInputErrorBorderWidth: 3;\n\n\n        /* NAV BUTTONS GENERAL */\n    /* @type COLOR_ALPHA */\n    navButtonBG: transparent;\n    /* @type BORDER_SIZE */\n    navButtonBorderWidth: 3;\n    /* @type BORDER_COLOR_ALPHA */\n    navButtonBorderColor: color_32;\n    /* @type BORDER_SIZE */\n    navButtonDisabledBorderWidth: 3;\n    /* @type BORDER_COLOR_ALPHA */\n    navButtonDisabledBorderColor: color_43;\n    /* @type COLOR_ALPHA */\n    navButtonDisabledBG: color_27;\n\n\n        /* ICON NAV BUTTONS */\n    /* @type COLOR_ALPHA */\n    arrowsColor: color_32;\n    /* @type COLOR_ALPHA */\n    arrowsDisabledColor: color_37;\n\n        /* TEXT NAV BUTTONS */\n    /* @type TEXT_SIZE */\n    navButtonTextSize: 15px;\n    /* @type TEXT_COLOR */\n    navButtonTextColor: color_15;\n    /* @type TEXT_COLOR */\n    navButtonDisabledTextColor: color_11;\n\n        /* GENERAL */\n    /* @type FONT */\n    fnt: font_8;\n    /* @type BORDER_RADIUS */\n    bRadius: 100px;\n    /* @type BOX_SHADOW */\n    shadow: none;\n}\n\n.pageButtonRules {\n    min-width: 1em;\n    min-height: 1em;\n    line-height: 1em;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em 0.5em;\n    margin: 0.25em;\n}\n\n.root {\n    -st-extends: Pagination;\n    -st-states: paginationMode(enum(pages, input)), navButtonsType(enum(text, arrows)), navButtonsAmount(number);\n    align-items: stretch;\n    font: value(fnt);\n    box-sizing: border-box;\n}\n\n.root::pageButton {\n    -st-mixin: pageButtonRules;\n    position: relative;\n    color: value(pageNumbersTextColor);\n}\n\n.root::currentPage {\n    -st-mixin: pageButtonRules;\n    color: value(selectedPageTextColor);\n    background: value(selectedPageBG);\n    border-radius: value(bRadius);\n    border: value(selectedPageBorderWidth) solid value(selectedPageBorderColor);\n    box-shadow: value(shadow);\n    padding: calc(0.5em - value(selectedPageBorderWidth)) calc(0.5em - value(selectedPageBorderWidth));\n}\n\n.root:not(:disabled)::pageButton:hover::before {\n    background: value(selectedPageBG);\n    opacity: 0.2;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: value(bRadius);\n}\n\n.root:not(:disabled)::pageButton:hover {\n    opacity: 0.7;\n}\n\n.root:disabled::pageButton {\n    cursor: default;\n}\n\n.root::navButton {\n    min-width: 1em;\n    min-height: 1em;\n    padding: calc(0.75em - value(navButtonBorderWidth));\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: value(navButtonBorderWidth) solid value(navButtonBorderColor);\n    background: value(navButtonBG);\n    border-radius: value(bRadius);\n}\n\n.root::navButton:disabled, .root[data-preview=\"disabled\"]::navButton {\n    padding: calc(0.75em - value(navButtonDisabledBorderWidth));\n    border: value(navButtonDisabledBorderWidth) solid value(navButtonDisabledBorderColor);\n    background: value(navButtonDisabledBG);\n    cursor: default;\n}\n\n.root::navButton:disabled svg, .root[data-preview=\"disabled\"]::navButton svg {\n    fill: value(arrowsDisabledColor);\n}\n\n.root::navButton:hover:not(:disabled) {\n    opacity: 0.8;\n}\n\n.root::navButton svg {\n    width: 1em;\n    min-width: 16px;\n    height: 1em;\n    min-height: 16px;\n    fill: value(arrowsColor);\n}\n\n.root[dir=\"rtl\"]::navButton svg {\n    transform: scaleX(-1);\n}\n\n.root::navButton span {\n    font-size: value(navButtonTextSize);\n    color: value(navButtonTextColor);\n    line-height: 1em;\n}\n\n.root::navButton:disabled span, .root[data-preview=\"disabled\"]::navButton span {\n    color: value(navButtonDisabledTextColor);\n}\n\n.root::navButtonFirst {\n    margin-right: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonFirst {\n    margin-right: 0;\n    margin-left: 1em;\n}\n\n.root::navButtonPrevious {\n    margin-right: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonPrevious {\n    margin-right: 0;\n    margin-left: 1em;\n}\n\n.root::navButtonLast {\n    margin-left: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonLast {\n    margin-left: 0;\n    margin-right: 1em;\n}\n\n.root::navButtonNext {\n    margin-left: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonNext {\n    margin-left: 0;\n    margin-right: 1em;\n}\n\n.root::gap {\n    -st-mixin: pageButtonRules;\n    color: value(pageNumbersTextColor);\n}\n\n.root::pageStrip {\n    min-width: 3em;\n    overflow: visible;\n    align-self: center;\n}\n\n.root::pageStripInner {\n    flex-grow: 1;\n    flex-basis: auto;\n    justify-content: center;\n    overflow: visible;\n    align-items: center;\n}\n\n.root::pageStripTemplate {\n    overflow: hidden;\n}\n\n.root::pageForm {\n    flex-grow: 1;\n    flex-basis: auto;\n    justify-content: center;\n    align-items: stretch;\n}\n\n.root::slash {\n    width: 1em;\n    height: 1em;\n    flex-shrink: 0;\n    align-self: center;\n}\n\n.root::slash svg {\n    width: 1em;\n    height: 1em;\n}\n\n.root::slash svg > g {\n    stroke: value(totalPagesTextColor)\n}\n\n.root::pageInput {\n    min-width: 3.5em;\n    padding: calc(0.25em - value(pageInputBorderWidth)) calc(0.5ch - value(pageInputBorderWidth));\n    color: value(pageInputTextColor);\n    border-radius: value(bRadius);\n    border: value(pageInputBorderWidth) solid value(pageInputBorderColor);\n    text-align: center;\n    margin: 0 0.25em;\n    background: value(pageInputBG);\n    box-shadow: value(shadow);\n    font: inherit;\n    -moz-appearance: textfield;\n}\n\n.root::pageInput:hover {\n    opacity: 0.8;\n}\n\n.root::pageInput:focus, .root[data-preview=\"focus\"]::pageInput {\n    padding: calc(0.25em - value(pageInputFocusBorderWidth)) calc(0.5ch - value(pageInputFocusBorderWidth));\n    background: value(pageInputFocusBG);\n    border: value(pageInputFocusBorderWidth) solid value(pageInputFocusBorderColor);\n}\n\n.root::pageInput::-webkit-inner-spin-button, .root::pageInput::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n}\n\n.root::totalPages {\n    max-width: 4ch;\n    min-width: 1ch;\n    padding-left: 0.25em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: value(totalPagesTextColor);\n    align-self: center;\n}\n\n.root:error::pageInput, .root[data-preview=\"error\"]::pageInput {\n    padding: calc(0.25em - value(pageInputErrorBorderWidth)) calc(0.5ch - value(pageInputErrorBorderWidth));\n    background: value(pageInputErrorBG);\n    border: value(pageInputErrorBorderWidth) solid value(pageInputErrorBorderColor);\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .root::totalPages {\n        max-width: 6ch;\n        min-width: 6ch;\n    }\n}"
    },
    "/wix-ui-santa/src/components/Tags/Tags.st.css": {
      "metadata": {
        "namespace": "Tags3268887993",
        "depth": 1
      },
      "content": ":vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Tags'; \n\n    /* @type COLOR */\n    tagBackgroundColor: color_8;\n\n    /* @type BORDER_COLOR_ALPHA */\n    tagBorderColor: color_3;\n\n    /* @type BORDER_SIZE */\n    tagBorderSize: 3;\n\n    /* @type BOX_SHADOW */\n    tagBoxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type FONT */\n    tagFont: font_4;\n\n    /* @type COLOR */\n    tagFontColor: color_3;\n\n    /* @type COLOR */\n    tagBackgroundColorHover: color_6;\n\n    /* @type COLOR */\n    tagFontColorHover: color_1;\n\n    /* @type BORDER_RADIUS */\n    tagBorderRadius: 100px;\n}\n\n.root {\n    -st-states: alignment(enum(left, center, right));\n}\n\n.tagsContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.root:alignment(left) .tagsContainer {\n    justify-content: flex-start;\n}\n\n.root:alignment(center) .tagsContainer {\n    justify-content: center;\n}\n\n.root:alignment(right) .tagsContainer {\n    justify-content: flex-end;\n}\n\n.tag {\n    box-shadow: value(tagBoxShadow);\n    border: value(tagBorderSize) solid value(tagBorderColor);\n    border-radius: value(tagBorderRadius);\n    cursor: pointer;\n    background-color: value(tagBackgroundColor);\n    font: value(tagFont);\n    color: value(tagFontColor);\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.tag:hover {\n    color: value(tagFontColorHover);\n    background-color: value(tagBackgroundColorHover);\n}\n"
    },
    "/wix-ui-santa/src/components/Captcha/Captcha.st.css": {
      "metadata": {
        "namespace": "Captcha217700995",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Captcha;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Captcha'\n}\n\n.root {\n    -st-extends: Captcha\n}\n\n.root::captcha {\n    /* in order to fit mobile view we need rescale the size to fit the mobile size */\n    transform: scale(0.77);\n    transform-origin: top left;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/slider/Slider.st.css": {
      "metadata": {
        "namespace": "Slider3044692096",
        "depth": 1
      },
      "content": ":import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  tickLineWidth: 1px;\n  tickLineHeight: 10px;\n  tickDotSize: 3px;\n  tickMarksGap: 12px;\n  tooltipGap: 10px;\n}\n\n.root {\n  -st-states: orientation(enum(vertical, horizontal)), tickMarksPosition(enum(normal, middle, across)), tickMarksShape(enum(line, dot)), dir(enum(ltr, rtl)), disabled;\n  position: relative;\n  box-sizing: border-box;\n  outline: none !important;\n}\n\n.root * {\n  box-sizing: border-box;\n}\n\n.tooltip {\n  -st-states: normalPosition, acrossPosition;\n  position: absolute;\n  background: #363636;\n  color: #fff;\n  padding: 4px 12px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n\n.tooltip::after,\n.tooltip::before {\n  content: ' ';\n  position: absolute;\n  margin-left: -8px;\n  border-width: 8px;\n  border-style: solid;\n}\n\n.track {\n  z-index: 0;\n  width: 100%;\n  height: 25%;\n  position: relative;\n  cursor: pointer;\n  background: #dadada;\n  opacity: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  min-height: 1px;\n}\n\n.inner {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.trackFill {\n  position: absolute;\n  background: linear-gradient(to right, #4992e3, #70bff3);\n  height: 100%;\n  width: 100%;\n}\n\n.root:dir(rtl) .trackFill {\n  right: 0;\n}\n\n.root:orientation(vertical) .track {\n  width: 25%;\n  height: 100%;\n}\n\n.root:orientation(vertical) .trackFill {\n  background: linear-gradient(to top, #4992e3, #70bff3);\n}\n\n.thumb {\n  z-index: 2;\n  position: absolute;\n  cursor: pointer;\n}\n\n.thumbShape {\n  -st-states: shapeType(enum(circle, square, rectangle, bar));\n  width: 100%;\n  height: 100%;\n  background: green;\n  border: 2px solid blue;\n}\n\n.thumbShape:shapeType(circle) {\n  border-radius: 50%;\n}\n\n.thumbShape:shapeType(square) {\n  border-radius: 7px;\n}\n\n.thumbShape:shapeType(rectangle) {\n  border-radius: 37px;\n}\n\n.thumbShape:shapeType(bar) {\n  border-radius: 7px;\n}\n\n.root:orientation(horizontal) .tooltip:normalPosition {\n  left: 50%;\n  top: calc(-7px - value(tooltipGap));\n  transform: translate(-50%, -100%);\n}\n.root:orientation(horizontal) .tooltip:acrossPosition {\n  left: 50%;\n  bottom: calc(-7px - value(tooltipGap));\n  transform: translate(-50%, 100%);\n}\n.root:orientation(vertical) .tooltip:normalPosition {\n  left: 50%;\n  left: calc(-7px - value(tooltipGap));\n  transform: translate(-100%, -50%);\n}\n.root:orientation(vertical) .tooltip:acrossPosition {\n  right: calc(-7px - value(tooltipGap));\n  transform: translate(100%, -50%);\n}\n\n.root:orientation(horizontal) .tooltip:normalPosition::after,\n.root:orientation(horizontal) .tooltip:normalPosition::before {\n  border-color: #363636 transparent transparent transparent;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.root:orientation(horizontal) .tooltip:acrossPosition::after,\n.root:orientation(horizontal) .tooltip:acrossPosition::before {\n  border-color: transparent transparent #363636 transparent;\n  bottom: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.root:orientation(vertical) .tooltip {\n  top: 50%;\n}\n\n.root:orientation(vertical) .tooltip::after,\n.root:orientation(vertical) .tooltip::before {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.root:orientation(vertical) .tooltip:normalPosition::after,\n.root:orientation(vertical) .tooltip:normalPosition::before {\n  left: 100%;\n  margin-left: 0;\n  border-color: transparent transparent transparent #363636;\n}\n\n.root:orientation(vertical) .tooltip:acrossPosition::after,\n.root:orientation(vertical) .tooltip:acrossPosition::before {\n  right: 100%;\n  border-color: transparent #363636 transparent transparent;\n}\n\n.tick {\n  display: inline-block;\n  position: absolute;\n  background: #000;\n  cursor: pointer;\n}\n\n.root:orientation(horizontal):tickMarksShape(line) .tick {\n  width: value(tickLineWidth);\n  height: value(tickLineHeight);\n}\n\n.root:orientation(vertical):tickMarksShape(line) .tick {\n  height: value(tickLineWidth);\n  width: value(tickLineHeight);\n}\n\n.root:tickMarksShape(dot) .tick {\n  width: value(tickDotSize);\n  height: value(tickDotSize);\n  border-radius: 50%;\n}\n\n.root:orientation(horizontal):tickMarksShape(dot) .tick {\n  transform: translateX(calc(- value(tickDotSize) / 2));\n}\n.root:orientation(vertical):tickMarksShape(dot) .tick {\n  transform: translateY(calc(value(tickDotSize) / 2));\n}\n\n.root:orientation(horizontal):tickMarksPosition(normal) .tick {\n  bottom: 0;\n}\n\n.root:orientation(vertical):tickMarksPosition(normal) .tick {\n  right: 0;\n}\n\n.root:orientation(horizontal):tickMarksPosition(middle) .tick {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.root:orientation(vertical):tickMarksPosition(middle) .tick {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.root:orientation(horizontal):tickMarksPosition(across) .tick {\n  top: 0;\n}\n\n.root:orientation(vertical):tickMarksPosition(across) .tick {\n  left: 0;\n}\n"
    },
    "/wix-ui-santa/src/components/Slider/Slider.st.css": {
      "metadata": {
        "namespace": "Slider3992224720",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Slider;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Slider'; \n\n    /* @type COLOR_ALPHA */\n    thumbBackground: color_25;\n    /* @type COLOR_ALPHA */\n    thumbBackgroundHover: color_23;\n    /* @type COLOR_ALPHA */\n    thumbBackgroundFocus: color_22;\n    /* @type COLOR_ALPHA */\n    thumbBackgroundDisabled: color_21;\n    /* @type BOX_SHADOW */\n    thumbBoxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type COLOR_ALPHA */\n    trackFill: color_22;\n    /* @type COLOR_ALPHA */\n    trackFillHover: color_23;\n    /* @type COLOR_ALPHA */\n    trackFillFocus: color_24;\n    /* @type COLOR_ALPHA */\n    trackFillDisabled: color_25;\n    /* @type BOX_SHADOW */\n    trackBoxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type COLOR_ALPHA */\n    trackBackground: color_26;\n    /* @type COLOR_ALPHA */\n    trackBackgroundHover: color_27;\n    /* @type COLOR_ALPHA */\n    trackBackgroundFocus: color_28;\n    /* @type COLOR_ALPHA */\n    trackBackgroundDisabled: color_29;\n\n    /* @type COLOR_ALPHA */\n    tooltipBackground: color_30;\n    /* @type TEXT_SIZE */\n    tooltipFontSize: 14;\n    /* @type FONT_FAMILY */\n    tooltipFontFamily: arial;\n    /* @type TEXT_COLOR */\n    tooltipFontColor: color_1;\n    /* @type BOX_SHADOW */\n    tooltipBoxShadow: initial;\n\n    /* @type COLOR_ALPHA */\n    tickMarkColor: color_4;\n\n    /* @type COLOR_ALPHA */\n    thumbBorderColor: color_22;\n    /* @type COLOR_ALPHA */\n    thumbBorderColorHover: color_23;\n    /* @type COLOR_ALPHA */\n    thumbBorderColorFocus: color_24;\n    /* @type COLOR_ALPHA */\n    thumbBorderColorDisabled: color_25;\n\n    /* @type BORDER_SIZE */\n    thumbBorderWidth: 4;\n    /* @type BORDER_SIZE */\n    thumbBorderWidthHover: 4;\n    /* @type BORDER_SIZE */\n    thumbBorderWidthFocus: 4;\n    /* @type BORDER_SIZE */\n    thumbBorderWidthDisabled: 4;\n    /* @type BORDER_RADIUS */\n    thumbBorderRadius: 8px;\n\n    /* @type COLOR_ALPHA */\n    trackBorderColor: color_28;\n    /* @type COLOR_ALPHA */\n    trackBorderColorHover: color_29;\n    /* @type COLOR_ALPHA */\n    trackBorderColorFocus: color_30;\n    /* @type COLOR_ALPHA */\n    trackBorderColorDisabled: color_31;\n\n    /* @type BORDER_SIZE */\n    trackBorderWidth: 7;\n    /* @type BORDER_SIZE */\n    trackBorderWidthHover: 6;\n    /* @type BORDER_SIZE */\n    trackBorderWidthFocus: 6;\n    /* @type BORDER_SIZE */\n    trackBorderWidthDisabled: 6;\n\n    /* @type BORDER_RADIUS */\n    tooltipBorderRadius: 2px;\n\n    /* @type BORDER_RADIUS */\n    trackBorderRadius: 8px;\n}\n\n.root {\n  -st-extends: Slider;\n  -st-states: preview-regular, preview-hover, preview-disabled, preview-focus;\n  z-index: 0;\n}\n\n.root::thumbShape {\n    background: value(thumbBackground);\n    border-color: value(thumbBorderColor);\n    border-width: value(thumbBorderWidth);\n    box-shadow: value(thumbBoxShadow);\n    border-style: solid;\n}\n\n.root::tick {\n  background: value(tickMarkColor);\n}\n\n.root::tooltip {\n  font-family: value(tooltipFontFamily);\n  font-size: value(tooltipFontSize);\n  color: value(tooltipFontColor);\n  background: value(tooltipBackground);\n  border-width: 0;\n  border-radius: value(tooltipBorderRadius);\n  box-shadow: value(tooltipBoxShadow);\n}\n\n.root::tooltip::before {\n  border-width: 0;\n}\n\n.root:orientation(horizontal)::tooltip:normalPosition::after {\n  border-color: value(tooltipBackground) transparent transparent transparent;\n}\n.root:orientation(horizontal)::tooltip:acrossPosition::after {\n  border-color: transparent transparent value(tooltipBackground) transparent;\n}\n.root:orientation(vertical)::tooltip:normalPosition::after {\n  border-color: transparent transparent transparent value(tooltipBackground);\n}\n.root:orientation(vertical)::tooltip:acrossPosition::after {\n  border-color: transparent value(tooltipBackground) transparent transparent;\n}\n\n.root:preview-hover::thumbShape, .root:hover::thumbShape {\n    background: value(thumbBackgroundHover);\n    border-color: value(thumbBorderColorHover);\n    border-width: value(thumbBorderWidthHover);\n}\n\n.root:preview-focus::thumbShape, .root:focus::thumbShape {\n    background: value(thumbBackgroundFocus);\n    border-color: value(thumbBorderColorFocus);\n    border-width: value(thumbBorderWidthFocus);\n}\n\n.root:preview-disabled::thumbShape, .root:disabled::thumbShape {\n    background: value(thumbBackgroundDisabled);\n    border-color: value(thumbBorderColorDisabled);\n    border-width: value(thumbBorderWidthDisabled);\n}\n\n.root::track {\n    background: value(trackBackground);\n    border-radius: value(trackBorderRadius);\n    border-color: value(trackBorderColor);\n    border-width: value(trackBorderWidth);\n    box-shadow: value(trackBoxShadow);\n}\n\n.root::trackFill {\n    background: value(trackFill);\n    border-radius: value(trackBorderRadius);\n}\n\n.root:orientation(horizontal):dir(ltr)::trackFill {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.root:orientation(horizontal):dir(rtl)::trackFill {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.root:orientation(vertical)::trackFill {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.root:preview-hover::trackFill, .root:hover::trackFill {\n    background: value(trackFillHover);\n}\n\n.root:preview-focus::trackFill, .root:focus::trackFill {\n    background: value(trackFillFocus);\n}\n\n.root:preview-disabled::trackFill, .root:disabled::trackFill {\n    background: value(trackFillDisabled);\n}\n\n.root:preview-hover::track, .root:hover::track {\n    background: value(trackBackgroundHover);\n    border-color: value(trackBorderColorHover);\n    border-width: value(trackBorderWidthHover);\n}\n\n.root:preview-focus::track, .root:focus::track {\n    background: value(trackBackgroundFocus);\n    border-color: value(trackBorderColorFocus);\n    border-width: value(trackBorderWidthFocus);\n}\n\n.root:preview-disabled::track, .root:disabled::track {\n    background: value(trackBackgroundDisabled);\n    border-color: value(trackBorderColorDisabled);\n    border-width: value(trackBorderWidthDisabled);\n}\n\n.root::thumbShape:shapeType(circle) {\n    border-radius: 50%;\n}\n.root::thumbShape:shapeType(circle):shapeType(circle) {\n    border-radius: value(thumbBorderRadius);\n}\n\n.root::thumbShape:shapeType(square) {\n    border-radius: 17px;\n}\n.root::thumbShape:shapeType(square):shapeType(square) {\n    border-radius: value(thumbBorderRadius);\n}\n\n.root::thumbShape:shapeType(rectangle) {\n    border-radius: 37px;\n}\n.root::thumbShape:shapeType(rectangle):shapeType(rectangle) {\n    border-radius: value(thumbBorderRadius);\n}\n\n.root::thumbShape:shapeType(bar) {\n    border-radius: 5px;\n}\n.root::thumbShape:shapeType(bar):shapeType(bar) {\n    border-radius: value(thumbBorderRadius);\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box/dist/src/components/SuggestionFooter/SuggestionFooter.st.css": {
      "metadata": {
        "namespace": "SuggestionFooter3702641668",
        "depth": 1
      },
      "content": ".root {\n  cursor: pointer;\n  padding: 12px 20px;\n\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n\n  box-sizing: border-box;\n}\n\n\n.root:hover {\n  opacity: 1;\n}\n\n.root:link, .root:hover,\n.root:active, .root:focus {\n  text-decoration: none;\n}\n\n.icon {\n  width: 12px;\n  height: 12px;\n  margin-right: 12px;\n}\n\n.text {\n  font-size: 12px;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box/dist/src/components/SuggestionHeader/SuggestionHeader.st.css": {
      "metadata": {
        "namespace": "SuggestionHeader2520722142",
        "depth": 1
      },
      "content": ".root {\n  padding: 20px 20px 11px 20px;  \n}\n\n.inner {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.divider {\n  margin-top: 8px;\n  width: 100%;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.title {\n  font-size: 14px;\n}\n\n.show-all-link {\n  font-size: 14px;\n  opacity: 0.3;\n  transition: opacity 0.2s;\n  flex-shrink: 0;\n}\n\n.show-all-link:hover {\n  opacity: 1;\n}\n\n.show-all-link:link, .show-all-link:hover,\n.show-all-link:active, .show-all-link:focus {\n  text-decoration: none;\n  color: inherit;\n}"
    },
    "/wix-ui-santa/src/components/SearchBox/SearchBox.st.css": {
      "metadata": {
        "namespace": "SearchBox3602044275",
        "depth": 8
      },
      "content": ":import {\n  -st-from: \"@wix/search-box/dist/src/components/SearchBox/SearchBox.st.css\";\n  -st-default: SearchBox;\n}\n\n:vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.SearchBox'; \n\n  /* REGULAR STATE */\n  /* @type COLOR_ALPHA */\n  inputBackgroundColor: color_11;\n  /* @type COLOR_ALPHA */\n  inputIconColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonBackgroundColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonIconColor: color_11;\n  /* @type COLOR */\n  inputTextColor: color_15;\n  /* @type COLOR */\n  inputPlaceholderColor: color_15;\n  /* @type FONT */\n  inputFont: font_8;\n  /* @type BORDER_COLOR_ALPHA */\n  inputBorderColor: color_15;\n  /* @type BORDER_SIZES */\n  inputBorderWidth: 1px;\n  /* @type BORDER_RADIUS */\n  inputBorderRadius: 0;\n  /* @type BOX_SHADOW */\n  inputShadow: none;\n\n  /* HOVER STATE */\n  /* @type COLOR_ALPHA */\n  inputHoverBackgroundColor: color_11;\n  /* @type COLOR_ALPHA */\n  inputHoverIconColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonHoverBackgroundColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonHoverIconColor:color_11;\n  /* @type BORDER_COLOR_ALPHA */\n  inputHoverBorderColor: color_15;\n  /* @type BORDER_SIZES */\n  inputHoverBorderWidth: 1px;\n  \n  /* FOCUS STATE */\n  /* @type COLOR_ALPHA */\n  inputFocusBackgroundColor: color_11;\n  /* @type COLOR_ALPHA */\n  inputFocusIconColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonFocusBackgroundColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonFocusIconColor: color_11;\n  /* @type BORDER_COLOR_ALPHA */\n  inputFocusBorderColor: color_15;\n  /* @type BORDER_SIZES */\n  inputFocusBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  suggestionSectionDividerColorNew: color_15;\n}\n\n/*\n  suggestionSectionDividerColorNew - is hidden from design panel (see santa-editor/conf/data/advancedStyleSkinsStaticConfig.json)\n  suggestionSectionDividerColorNew renamed from suggestionSectionDividerColor (added \"New\" suffix)\n  becasue previous property was not hidden from design panel and users maight change the value \n*/\n\n.root {\n  -st-mixin: SearchBox(\n    inputBackgroundColor 'value(inputBackgroundColor)',\n    inputIconColor 'value(inputIconColor)',\n    buttonBackgroundColor 'value(buttonBackgroundColor)',\n    buttonIconColor 'value(buttonIconColor)',\n    inputTextColor 'value(inputTextColor)',\n    inputPlaceholderColor 'value(inputPlaceholderColor)',\n    inputFont 'value(inputFont)',\n    inputBorderColor 'value(inputBorderColor)',\n    inputBorderWidth 'value(inputBorderWidth)',\n    inputBorderRadius 'value(inputBorderRadius)',\n    inputShadow 'value(inputShadow)',\n\n    inputHoverBackgroundColor 'value(inputHoverBackgroundColor)',\n    inputHoverIconColor 'value(inputHoverIconColor)',\n    buttonHoverBackgroundColor 'value(buttonHoverBackgroundColor)',\n    buttonHoverIconColor 'value(buttonHoverIconColor)',\n    inputHoverBorderColor 'value(inputHoverBorderColor)',\n    inputHoverBorderWidth 'value(inputHoverBorderWidth)',\n\n    inputFocusBackgroundColor 'value(inputFocusBackgroundColor)',\n    inputFocusIconColor 'value(inputFocusIconColor)',\n    buttonFocusBackgroundColor 'value(buttonFocusBackgroundColor)',\n    buttonFocusIconColor 'value(buttonFocusIconColor)',\n    inputFocusBorderColor 'value(inputFocusBorderColor)',\n    inputFocusBorderWidth 'value(inputFocusBorderWidth)',\n\n    suggestionHoverColor 'value(inputHoverBackgroundColor)',\n    suggestionSectionDividerColor 'value(suggestionSectionDividerColorNew)',\n\n    searchIconSize '0.9em'\n  );\n}\n"
    },
    "/wix-ui-santa/src/components/LineShareButton/LineShareButton.st.css": {
      "metadata": {
        "namespace": "LineShareButton2783482091",
        "depth": 1
      },
      "content": ".root {}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.LineShareButton';    \n}"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/ArtistName/ArtistName.st.css": {
      "metadata": {
        "namespace": "ArtistName3550430882",
        "depth": 1
      },
      "content": ".title {\n  color: inherit;\n  font-size: 16px;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Cover/Cover.st.css": {
      "metadata": {
        "namespace": "Cover948618600",
        "depth": 1
      },
      "content": ".cover {\n  display: block;\n  width: 70px;\n  height: 70px;\n  background-position: center;\n  background-size: cover;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/TimeStamp/TimeStamp.st.css": {
      "metadata": {
        "namespace": "TimeStamp4010266334",
        "depth": 1
      },
      "content": ".time {\n  display: block;\n  padding: 4px 0 4px 12px;\n  opacity: .6;\n  font-size: 12px;\n  line-height: 1;\n  white-space: nowrap;\n  font-family: Helvetica Neue, HelveticaNeue-Light, Helvetica Neue Light, Avenir, Gordita, Helvetica, Arial, sans-serif;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/TrackName/TrackName.st.css": {
      "metadata": {
        "namespace": "TrackName2923927536",
        "depth": 1
      },
      "content": ".title {\n  color: inherit;\n  font-size: 16px;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/PlayPause/PlayPause.st.css": {
      "metadata": {
        "namespace": "PlayPause2241690922",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  width: 16px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  fill: currentColor;\n  background: transparent;\n  cursor: pointer;\n  color: currentColor;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/PlayPauseAnimated/PlayPauseAnimated.st.css": {
      "metadata": {
        "namespace": "PlayPauseAnimated1167379259",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  fill: currentColor;\n  background: transparent;\n  cursor: pointer;\n  color: currentColor;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Mute/Mute.st.css": {
      "metadata": {
        "namespace": "Mute1732701274",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: inherit;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Rate/Rate.st.css": {
      "metadata": {
        "namespace": "Rate1488641520",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: inherit;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Forward/Forward.st.css": {
      "metadata": {
        "namespace": "Forward3348610119",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: inherit;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/captcha/Captcha.st.css": {
      "metadata": {
        "namespace": "Captcha658911224",
        "depth": 1
      },
      "content": ".root {\n    -st-states: loaded(boolean);\n    /* we set this to relevant so we can position the hidden checkbox(root .checkbox) relatie to the captcha */\n    position: relative;\n}\n\n.loaderWrapper {\n\n}\n\n.captcha {\n\n}\n\n.root:loaded .captcha {\n    display: block;\n}\n\n.root:loaded .loaderWrapper {\n    display: none;\n}\n\n.root .captcha {\n    display: none;\n}\n/* a hidden check box that will give the captcha a required input element capabilities */\n.root .requiredField {\n    position: absolute;\n    opacity : 0.0;\n    bottom: 0;\n    left: 0;\n    /*avoid user clicking on this hidden checkbox*/\n    -webkit-user-select: none; /* Safari 3.1+ */\n    -moz-user-select: none; /* Firefox 2+ */\n    -ms-user-select: none; /* IE 10+ */\n    user-select: none; /* Standard syntax */\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/linear-progress-bar/LinearProgressBar.st.css": {
      "metadata": {
        "namespace": "LinearProgressBar1558823238",
        "depth": 1
      },
      "content": ".root {\n  -st-states: error, success;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.progressIndicationSection {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.barContainer {\n  width: 100%;\n  position: relative;\n  height: 100%;\n}\n\n.barBackground, .barForeground{\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n}\n\n.barBackground {\n  width: 100%;\n}\n\n.indicationContainer {}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box/dist/src/components/ClearButton/ClearButton.st.css": {
      "metadata": {
        "namespace": "ClearButton3502803432",
        "depth": 1
      },
      "content": ":vars {\n  clearButtonColor: rgba(0, 0, 0, 0.6);\n}\n\n.root {\n  margin: 0 15px;\n  padding: 0;\n  box-sizing: border-box;\n  text-align: center;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: value(clearButtonColor);\n  opacity: 0.6;\n}\n\n\n.root:focus, .root:active, .root:hover {\n  color: rgba(0, 0, 0, 1);\n  opacity: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-results-layouts/dist/src/components/ImageCover/ImageCover.st.css": {
      "metadata": {
        "namespace": "ImageCover4276724457",
        "depth": 1
      },
      "content": ".image-cover {\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-size: cover;\n\n  -st-states: loading, placeholder;\n}\n\n.image-cover::before {\n  content: '';\n  display: block;\n  padding-top: calc(3 / 4 * 100%);\n}\n\n.image-cover:placeholder {\n  /*\n    workaround for misconfigured `svg-url-loader` in yoshi@4\n    see also:\n      https://github.com/bhovhannes/svg-url-loader/issues/151\n      https://github.com/wix/yoshi/blob/b8feb9ac104e46eb7c54c6564d666d43058b8f60/packages/yoshi/config/webpack.config.js#L524\n  */\n  /* background-image: url(../../assets/placeholder.svg); */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzYiIGhlaWdodD0iMTI0IiB2aWV3Qm94PSIwIDAgMTc2IDEyNCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGZpbGw9IiM5REE1QUYiIGQ9Ik0wIDBoMTc2djEyNEgweiIvPgogICAgPHBhdGggZmlsbD0iI0Q3RENFMiIgZD0iTTk5LjcyMSA0OEgxMDlhNCA0IDAgMCAxIDQgNHYyNmE0IDQgMCAwIDEtNCA0SDY4YTQgNCAwIDAgMS00LTRWNTJhNCA0IDAgMCAxIDQtNGg5LjI5NGwxLjU1LTUuMjgyYTEgMSAwIDAgMSAuOTYtLjcxOEg5Ny4yOWExIDEgMCAwIDEgLjk2NC43MzJMOTkuNzIgNDh6TTg4LjUgNzUuNUM5NC4yOTkgNzUuNSA5OSA3MC43OTkgOTkgNjVzLTQuNzAxLTEwLjUtMTAuNS0xMC41Uzc4IDU5LjIwMSA3OCA2NXM0LjcwMSAxMC41IDEwLjUgMTAuNXoiLz4KICA8L2c+Cjwvc3ZnPgo=\");\n}\n\n.image-cover:loading {\n  position: relative;\n  overflow: hidden;\n  background-color: #eeeeee;\n}\n\n.image-cover:loading::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(\n    to right,\n    rgba(225, 225, 225, 0),\n    #e0e0e0 51%,\n    rgba(231, 231, 231, 0)\n  );\n  animation-name: loading;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}"
    },
    "/wix-ui-santa/node_modules/@wix/search-results-layouts/dist/src/components/Thumbnail/Thumbnail.st.css": {
      "metadata": {
        "namespace": "Thumbnail2577400859",
        "depth": 2
      },
      "content": ".root {\n  flex-shrink: 0;\n  width: 200px;\n  height: 150px;\n  display: inline-block;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-results-layouts/dist/src/components/Title/Title.st.css": {
      "metadata": {
        "namespace": "Title3981201609",
        "depth": 1
      },
      "content": ":vars {\n  black: #000;\n}\n\n.root {\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  color: value(black);\n  font-size: 20px;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  align-self: flex-start;\n}\n\n.root:hover {\n  text-decoration: underline;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-results-layouts/dist/src/components/Description/Description.st.css": {
      "metadata": {
        "namespace": "Description1574742372",
        "depth": 1
      },
      "content": ".root {\n  font-size: 14px;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-results-layouts/dist/src/components/ListLayout/ListLayout.st.css": {
      "metadata": {
        "namespace": "ListLayout3178370949",
        "depth": 4
      },
      "content": "@namespace \"ListLayout\";\n\n:import {\n  -st-from: \"./ListLayoutItem.st.css\";\n  -st-default: ListLayoutItem;\n}\n\n.root {\n  -st-states: mobileView;\n  width: 100%;\n  margin-bottom: 52px;\n}\n\n/** Mobile **/\n.root:mobileView {\n  margin-bottom: 32px;\n}\n\n\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/address-input/AddressInput.st.css": {
      "metadata": {
        "namespace": "AddressInput1305794840",
        "depth": 5
      },
      "content": ":import {\n    -st-from: \"../input-with-options/InputWithOptions.st.css\";\n    -st-default: InputWithOptions;\n}\n\n.root {\n    -st-extends: InputWithOptions;\n}\n\n.option {\n    display: flex;\n}\n\n.iconWrapper {\n    display: flex;\n    align-items: center;\n    padding: 0 6px;\n}\n\n.icon {\n\n}\n\n.optionContent {\n    flex: 1;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableLine/StylableLine.st.css": {
      "metadata": {
        "namespace": "StylableLine1578375768",
        "depth": 1
      },
      "content": ".root {\n    -archetype: box;\n    box-sizing: border-box;\n}\n.text {\n    -archetype: text;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableLine/variants/a.st.css": {
      "metadata": {
        "namespace": "a-StylableLine1578375768",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n    -st-from: \"../StylableLine.st.css\";\n    -st-default: StylableLine;\n}\n\n.root {\n    -st-extends: StylableLine;\n    box-sizing: border-box;\n    border: 2px solid orange;\n    background: lightblue;\n    font-size: 20px;\n    border-radius: 30px;\n    color: red;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableLine/variants/test.st.css": {
      "metadata": {
        "namespace": "test-StylableLine1578375768",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n    -st-from: \"../StylableLine.st.css\";\n    -st-default: StylableLine;\n}\n\n.root {\n    -st-extends: StylableLine;\n    box-sizing: border-box;\n    border-radius: 20px;\n    padding: 2px;\n    background: rebeccapurple;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/signature-input/title/Title.st.css": {
      "metadata": {
        "namespace": "Title2344785757",
        "depth": 1
      },
      "content": ".root {\n  word-break: break-all;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/signature-input/signing-pad/SigningPad.st.css": {
      "metadata": {
        "namespace": "SigningPad2457148620",
        "depth": 1
      },
      "content": ".visuallyHidden {\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/signature-input/clear-button/ClearButton.st.css": {
      "metadata": {
        "namespace": "ClearButton3349217890",
        "depth": 1
      },
      "content": ".root {\n  word-break: break-all;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/tags-list/TagsList.st.css": {
      "metadata": {
        "namespace": "TagsList3922475829",
        "depth": 1
      },
      "content": ".root {\n  display: flex;\n  flex-flow: wrap;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/tags-list/Tag.st.css": {
      "metadata": {
        "namespace": "Tag3657158793",
        "depth": 1
      },
      "content": ".tag {\n  cursor: pointer;\n  width: auto;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n\n.tag > * {\n  cursor: pointer;\n}\n\n.tagInput {\n  display: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/common/a11y.st.css": {
      "metadata": {
        "namespace": "a11y1563736556",
        "depth": 1
      },
      "content": ".srOnly {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    border: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/autocomplete/Autocomplete.st.css": {
      "metadata": {
        "namespace": "Autocomplete4216198947",
        "depth": 5
      },
      "content": ":import {\n  -st-from: \"../input-with-options/InputWithOptions.st.css\";\n  -st-default: InputWithOptions;\n}\n\n:import {\n  -st-from: \"../deprecated/divider/Divider.st.css\";\n  -st-default: Divider;\n}\n\n.root {\n  -st-extends: InputWithOptions;\n  -st-states: disabled;\n}\n\n.divider {\n  -st-extends: Divider;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/avatar/avatar.st.css": {
      "metadata": {
        "namespace": "avatar1723609995",
        "depth": 1
      },
      "content": ".root {\n  -st-states: imgLoaded(boolean), contentType(enum(text, placeholder, image));\n}\n\n.content {}\n\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/checkbox/Checkbox.st.css": {
      "metadata": {
        "namespace": "Checkbox3155287479",
        "depth": 1
      },
      "content": "@namespace \"Checkbox\";\n\n.root {\n    -st-states: checked, disabled, indeterminate, readonly, focus, focus-visible, error;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.root:disabled {\n    pointer-events: none;\n}\n\n.box {}\n\n.nativeCheckbox {\n    margin: 0;\n    position: absolute;\n    cursor: inherit;\n    pointer-events: none;\n    opacity: 0;\n}\n\n.childContainer {\n    display: inline;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/circular-progress-bar/CircularProgressBar.st.css": {
      "metadata": {
        "namespace": "CircularProgressBar2692118877",
        "depth": 1
      },
      "content": ".root {\n  -st-states: error, success;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.progressIndicator {\n  position: relative;\n  height: 100%;\n}\n\n.indicationIconContainer,\n.statusIndicator {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.arcsContainer {\n  width: 54px;\n  position: relative;\n  height: 54px;\n}\n\n.foreArc,\n.backArc {\n  width: 100%;\n  height: 100%;\n  fill: none;\n  stroke-linecap: round;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/button/Button.st.css": {
      "metadata": {
        "namespace": "Button1824692552",
        "depth": 1
      },
      "content": ".root {\n    -st-states: disabled;\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    outline: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/button/ButtonStyle.st.css": {
      "metadata": {
        "namespace": "ButtonStyle231432022",
        "depth": 2
      },
      "content": ":import {\n    -st-from: \"./Button.st.css\";\n    -st-default: Button;\n}\n\n.root {\n    height: 16px;\n    background-color: red;\n}\n\n:vars {\n    height: initial;\n    padding: 0px 23px;\n    borderRadius: 0;\n\n    fontFamily: \"HelveticaNeueW01-45Ligh\", \"HelveticaNeueW02-45Ligh\", \"HelveticaNeueW10-45Ligh\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", \"メイリオ; meiryo\", \"ヒラギノ角ゴ pro w3\", \"hiragino kaku gothic pro\", \"sans-serif\";\n    fontSize: 16px;\n    lineHeight: 24px;\n    fontStyle: normal;\n    fontWeight: normal;\n    color: black;\n    backgroundColor: grey;\n    borderColor: black;\n    disabledBackgroundColor: black;\n    disabledBorderColor: grey;\n    disabledColor: grey;\n}\n\n.root {\n    -st-extends: Button;\n    height: value(height);\n    padding: value(padding);\n    border-radius: value(borderRadius);\n    font-family: value(fontFamily);\n    font-size: value(fontSize);\n    line-height: value(lineHeight);\n    font-style: value(fontStyle);\n    font-weight: value(fontWeight);\n    color: value(color);\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n}\n\n.root:disabled {\n    background-color: value(disabledBackgroundColor);\n    border-color: value(disabledBorderColor);\n    color: value(disabledColor);\n}\n\n.root:hover {\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n    color: value(color);\n}\n\n.root:active {\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n    color: value(color);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/label/Label.st.css": {
      "metadata": {
        "namespace": "Label3084586306",
        "depth": 2
      },
      "content": ":import {\n    -st-from: '../../../mixins/mixins.st.css';\n    -st-named: ellipsisMixin;\n}\n\n\n.root {\n    -st-states: ellipsis, disabled;\n}\n\n.root:ellipsis {\n  -st-mixin: ellipsisMixin;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/stylable-badge/Badge.st.css": {
      "metadata": {
        "namespace": "Badge2105347887",
        "depth": 1
      },
      "content": ".root {\n    cursor: default;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/stylable-badge/BadgeStyle.st.css": {
      "metadata": {
        "namespace": "BadgeStyle270820482",
        "depth": 2
      },
      "content": ":import {\n    -st-from: \"./Badge.st.css\";\n    -st-default: Badge;\n  }\n  \n:vars {\n    backgroundColor: grey;\n    borderColor: grey;\n    color: white;\n}\n\n.root {\n    -st-extends: Badge;\n    height: 24px;\n    padding: 4px 12px;\n    \n    border: 1px solid;\n    border-radius: 2px;\n    border-color: value(borderColor);\n    color: value(color);\n    \n    background: value(backgroundColor);\n    \n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n\n    line-height: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/Ellipsis.st.css": {
      "metadata": {
        "namespace": "Ellipsis4134172479",
        "depth": 1
      },
      "content": ".root {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  vertical-align: bottom;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/EllipsisTooltip.st.css": {
      "metadata": {
        "namespace": "EllipsisTooltip896236369",
        "depth": 3
      },
      "content": ":import {\n  -st-from: \"../tooltip/Tooltip.st.css\";\n  -st-default: Tooltip;\n}\n\n.root {\n  -st-extends: Tooltip;\n  display: inline;\n  overflow: hidden;\n}\n\n.root::popoverElement {\n  max-width: 100%;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css": {
      "metadata": {
        "namespace": "EllipsisTooltipTests655396190",
        "depth": 1
      },
      "content": ".withDifferentWhiteSpace {\n  white-space: pre-line;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/file-picker-button/FilePickerButton.st.css": {
      "metadata": {
        "namespace": "FilePickerButton1657625510",
        "depth": 2
      },
      "content": ":import {\n    -st-from: '../../common/a11y.st.css';\n    -st-named: srOnly;\n}\n\n.root {\n    -st-states: required, disabled;\n}\n\n.fileInput {\n    -st-mixin: srOnly;\n}\n\n.chooseFileButton {}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/icon-with-options/IconWithOptions.st.css": {
      "metadata": {
        "namespace": "IconWithOptions108187924",
        "depth": 4
      },
      "content": ":import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n.root {\n  -st-extends: Dropdown;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/image/image.st.css": {
      "metadata": {
        "namespace": "image2193850354",
        "depth": 1
      },
      "content": ".root {\n    -st-states: loadState(enum(loading, loaded, error));\n}\n\n.hiddenImage {\n    visibility: hidden;\n    width: 100%;\n    height: 100%;\n}\n\n.wrapper {\n    -st-extends: root;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/label-with-options/LabelWithOptions.st.css": {
      "metadata": {
        "namespace": "LabelWithOptions429444791",
        "depth": 4
      },
      "content": ":import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n:import {\n  -st-from: \"../dropdown-option/DropdownOption.st.css\";\n  -st-default: DropdownOption;\n}\n\n:import {\n  -st-from: \"../checkbox/Checkbox.st.css\";\n  -st-default: Checkbox;\n}\n\n:import {\n  -st-from: \"../deprecated/label/Label.st.css\";\n  -st-default: Label;\n}\n\n:import {\n  -st-from: \"../deprecated/divider/Divider.st.css\";\n  -st-default: Divider;\n}\n\n.root {\n  -st-extends: Dropdown;\n  -st-states: required, error, disabled, checkbox;\n}\n\n@custom-selector :--selected .root:checkbox DropdownOption:selected;\n\n:--selected {\n  background-color: white; \n}\n.selection {\n\n}\n\n.label {\n  -st-extends: Label;\n}\n\n.divider {\n  -st-extends: Divider;\n}\n\n.placeholder {\n}\n\n.optionContainer {\n  display: flex;\n}\n\n.checkbox {\n  -st-extends: Checkbox;\n  width: 1em;\n  height: 1em;\n  border: 1px solid black;\n}\n\n.checkbox:checked {\n  background: blue;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/menu-item/menu-item.st.css": {
      "metadata": {
        "namespace": "menuitem723981389",
        "depth": 1
      },
      "content": ".root {\n  -st-states: selected, highlighted, disabled;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/nav-stepper/NavStep.st.css": {
      "metadata": {
        "namespace": "NavStep155081814",
        "depth": 1
      },
      "content": ".root {\n    -st-states: active, visited, disabled;\n}\n\n.root:visited {\n    color: green;\n}\n\n.root:disabled {\n    color: grey;\n}\n\n.root:active {\n    color: blue;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/nav-stepper/NavStepper.st.css": {
      "metadata": {
        "namespace": "NavStepper1971781742",
        "depth": 2
      },
      "content": ":import {\n    -st-from: \"./NavStep.st.css\";\n    -st-default: NavStep;\n}\n.root {\n\n}\n.steps {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.step {\n    -st-extends: NavStep;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/pagination/PaginationTest.st.css": {
      "metadata": {
        "namespace": "PaginationTest190431124",
        "depth": 2
      },
      "content": ":import {\n  -st-from: './Pagination.st.css';\n  -st-default: Pagination;\n}\n\n:vars {\n  materialBlueGray100: #CFD8DC;\n  materialBlueGray200: #B0BEC5;\n  materialBlueGray700: #455A64;\n  materialRed500: #f44336;\n}\n\n.button-common-mixin {\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n  padding: 5px;\n  min-width: 20px;\n  min-height: 20px;\n  font: 12px/1 Arial, sans-serif;\n  text-decoration: none;\n}\n\n.root {\n  -st-extends: Pagination;\n  color: value(materialBlueGray700);\n  background-color: #ECEFF1;\n}\n\n.root::navButton {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray100);\n}\n\n.root::navButton.disabled {\n  color: value(materialBlueGray200);\n  background-color: transparent;\n}\n\n.root::pageStripInner {\n  justify-content: center;\n}\n\n.root::pageButton {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray200);\n}\n\n.root::currentPage {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray700);\n  color: value(materialBlueGray100);\n}\n\n.root::gap {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray100);\n}\n\n.root::pageForm {\n  margin: 5px;\n  align-items: center;\n}\n\n.root::pageInput {\n  box-sizing: border-box;\n  height: 30px;\n  text-align: center;\n  font: 12px/1 Arial, sans-serif;\n  color: inherit;\n}\n\n.root:error::pageInput {\n  border-color: value(materialRed500);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/thumbnail/Thumbnail.st.css": {
      "metadata": {
        "namespace": "Thumbnail3089031451",
        "depth": 1
      },
      "content": ".root {\n  -st-states: selected, disabled;\n  position: relative;\n  border: 1px solid grey;\n}\n\n.selectedIcon {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n}\n\n:global([dir=\"rtl\"]) .selectedIcon {\n  left: -10px;\n  right: unset;\n}\n\n.root:disabled {\n  cursor: default;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitch.st.css": {
      "metadata": {
        "namespace": "ToggleSwitch1850500685",
        "depth": 1
      },
      "content": ".root {\n  /* Info on focus-visible: https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo */\n  -st-states: checked, disabled, focus, focus-visible;\n  display: inline-flex;\n  position: relative;\n}\n\n/* We're relying on the input to handle mouse events, that's why we need it to cover the entire component */\n.input {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  cursor: inherit;\n}\n\n.track {}\n\n.knob {}\n\n.knobIcon {}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchColor.st.css": {
      "metadata": {
        "namespace": "ToggleSwitchColor1144327522",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n:vars {\n  colorUnchecked: #999;\n  colorChecked: #999;\n  colorUncheckedHover: #999;\n  colorCheckedHover: #999;\n  colorDisabled: #999;\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n}\n\n.root::track {\n  background-color: currentColor;\n}\n\n.root::knob {\n  background-color: white;\n}\n\n.root::knobIcon {\n  fill: currentColor;\n}\n\n.root {\n  color: value(colorUnchecked);\n}\n\n.root:hover {\n  color: value(colorUncheckedHover);\n}\n\n.root:checked {\n  color: value(colorChecked);\n}\n\n.root:checked:hover {\n  color: value(colorCheckedHover);\n}\n\n.root:disabled,\n.root:disabled:hover,\n.root:disabled:checked,\n.root:disabled:checked:hover {\n  color: value(colorDisabled);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchLayout.st.css": {
      "metadata": {
        "namespace": "ToggleSwitchLayout1986701584",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n:import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  rootWidth: 48px;\n  rootHeight: 24px;\n  trackWidth: value(rootWidth);\n  trackHeight: value(rootHeight);\n  knobWidth: calc(value(rootHeight) / 1.2);\n  knobHeight: calc(value(rootHeight) / 1.2);\n  knobMovementRange: calc(value(trackWidth)/2 - value(knobWidth)/2 - 1);\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: value(rootWidth);\n  height: value(rootHeight);\n  box-sizing: border-box;\n}\n\n.root::track {\n  box-sizing: border-box;\n  width: value(trackWidth);\n  height: value(trackHeight);\n  border-radius: calc(value(trackHeight) / 2);\n}\n\n.root::knob {\n  position: absolute;\n  box-sizing: border-box;\n  width: value(knobWidth);\n  height: value(knobHeight);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: calc(value(knobHeight) / 2);\n  transform: translateX(calc(-1 * value(knobMovementRange)));\n}\n\n.root::knobIcon {\n  width: calc(value(knobHeight) / 2);\n  height: calc(value(knobHeight) / 2);\n}\n\n.root::knobIcon > svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.root:checked::knob,\n:global([dir=\"rtl\"]) .root::knob {\n  transform: translateX(value(knobMovementRange));\n}\n\n:global([dir=\"rtl\"]) .root:checked::knob {\n  transform: translateX(calc(-1 * value(knobMovementRange)));\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchStyle.st.css": {
      "metadata": {
        "namespace": "ToggleSwitchStyle814859130",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n}\n\n.root:not(:disabled) {\n  cursor: pointer;\n}\n\n.root::track {\n  transition: all 300ms ease;\n}\n\n.root::knob {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);\n  transition: all 300ms ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/tooltip/Tooltip.st.css": {
      "metadata": {
        "namespace": "Tooltip1379559090",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"../popover/Popover.st.css\";\n  -st-default: Popover;\n}\n\n.root {\n  -st-extends: Popover;\n}\n\n.root::popoverContent {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/mixins/mixins.st.css": {
      "metadata": {
        "namespace": "mixins4118951502",
        "depth": 1
      },
      "content": ".ellipsisMixin {\n    display: block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}"
    },
    "/wix-ui-santa/index.st.css": {
      "metadata": {
        "namespace": "wix-ui-santa-index",
        "depth": 1
      },
      "content": ":import {-st-from: \"/wix-ui-santa/src/components/StylableButton/StylableButton.st.css\"; -st-default: StylableButton} .root StylableButton{}\n:import {-st-from: \"/wix-ui-santa/src/components/StylableLine/StylableLine.st.css\"; -st-default: StylableLine} .root StylableLine{}\n"
    }
  },
  "components": {
    "StylableButton": {
      "id": "StylableButton",
      "stylesheetPath": "/wix-ui-santa/src/components/StylableButton/StylableButton.st.css",
      "variantsPath": "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1",
      "presets": [],
      "previewProps": {
        "styleId": "",
        "style": {}
      },
      "selectorConfiguration": {
        ".root": {
          "displayName": "Button",
          "nameKey": "StylablePanel_Design_Button_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Button_Label",
          "stateNameOverrides": {
            "focus": {
              "hidden": true
            },
            "active": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            },
            "error": {
              "hidden": true
            }
          },
          "copyControllers": {
            ".root::container": [
              {
                "categoryId": "layout",
                "controllerKey": "layout"
              }
            ]
          },
          "controllerData": {
            "layout": {
              "translationKeys": {
                "flex-direction_title_key": "StylablePanel_Design_Button_Layout_Position_Label",
                "justify-content_title_key": "StylablePanel_Design_Button_Layout_Alignment_Label",
                "align-items_title_key": "StylablePanel_Design_Button_Layout_Alignment_Label",
                "display_title_key": "StylablePanel_Design_Layout_Show_Label",
                "display_option_all_key": "StylablePanel_Design_Layout_Show_Dropdown_TextIcon",
                "display_option_text_key": "StylablePanel_Design_Layout_Show_Dropdown_Text",
                "display_option_icon_key": "StylablePanel_Design_Layout_Show_Dropdown_Icon",
                "spacing_title_key": "StylablePanel_Design_Button_Layout_Spacing_Label"
              }
            }
          }
        },
        ".root::container": {
          "hide": true,
          "primeElementSelector": ".root",
          "displayName": "Container",
          "nameKey": "Container"
        },
        ".root::link": {
          "hide": true
        },
        ".root::label": {
          "displayName": "Label",
          "nameKey": "StylablePanel_Design_Button_Text_Tab_Label",
          "primeElementSelector": ".root",
          "stateNameOverrides": {
            "focus": {
              "hidden": true
            },
            "active": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            }
          }
        },
        ".root::icon": {
          "displayName": "Icon",
          "nameKey": "StylablePanel_Design_Button_Icon_Tab_Label",
          "primeElementSelector": ".root",
          "stateNameOverrides": {
            "focus": {
              "hidden": true
            },
            "active": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            }
          }
        }
      },
      "namespace": "StylableButton3172224474"
    },
    "StylableLine": {
      "id": "StylableLine",
      "stylesheetPath": "/wix-ui-santa/src/components/StylableLine/StylableLine.st.css",
      "variantsPath": "/wix-ui-santa/src/components/StylableLine/variants",
      "presets": [
        {
          "path": "/wix-ui-santa/src/components/StylableLine/variants/test.st.css"
        },
        {
          "path": "/wix-ui-santa/src/components/StylableLine/variants/a.st.css"
        }
      ],
      "previewProps": {
        "styleId": "",
        "style": {}
      },
      "selectorConfiguration": {
        ".root": {
          "displayName": "Line"
        }
      },
      "namespace": "StylableLine1578375768"
    }
  },
  "packages": {
    "@wix": "/wix-ui-santa/node_modules/@wix",
    "wix-ui-core": "/wix-ui-santa/node_modules/wix-ui-core",
    "wix-ui-santa": "/wix-ui-santa"
  }
}; }));