// adds a new Jquery selector for case-insentive :contains called with
// :containsCI
$.extend($.expr[":"], {
    "containsCI": function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || "")
            .toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

$.get("https://www.howsmyssl.com/a/check", {
    paramOne: 1,
    paramX: 'abc'
}, function (data) {
    if (data.tls_version == "TLS 1.0") {
        $('body').remove();
        document.write('<div class="logo"><a class="logo-link" href="//lse.ac.uk/home.aspx"> <img class=' +
                '"logo-image" style="width:200px;" src="https://lseapps.secure.force.com/static/r' +
                'esource/FormAssets/London-school-of-economics-logo-with-name.svg"></a></div><p><' +
                'br><span style="font-size: medium;"><b>ERROR MESSAGE:</b><br>It looks like the s' +
                'ecurity settings for your browser are out of date. As we can only accept data pr' +
                'ovided securely, we advise that you try this link again with another browser or ' +
                'follow the instructions below to update your settings.</span></p><p>&nbsp;</p><p' +
                '><span style="font-size: medium;"><a id="IE" name="IE"></a><strong>Microsoft Int' +
                'ernet Explorer</strong></span></p><div class="content"><ol><li><span style="font' +
                '-size: medium;">Open&nbsp;<strong>Internet Explorer</strong></span></li><li><spa' +
                'n style="font-size: medium;">From the menu bar, click&nbsp;<strong>Tools&nbsp;</' +
                'strong>&gt;&nbsp;<strong>&nbsp;Internet Options</strong>&nbsp;&gt;&nbsp;<strong>' +
                'Advanced</strong>&nbsp;tab</span></li><li><span style="font-size: medium;">Scrol' +
                'l down to&nbsp;<strong>Security&nbsp;</strong>category, manually check the optio' +
                'n box for&nbsp;<strong>Use TLS 1.1&nbsp;</strong>and&nbsp;<strong>Use TLS 1.2</s' +
                'trong></span></li></ol><p><span style="font-size: medium;"><a id="Chrome" name="' +
                'Chrome"></a><strong>Google Chrome</strong></span></p><ol><li><span style="font-s' +
                'ize: medium;">Open&nbsp;<strong>Google Chrome</strong></span></li><li><span styl' +
                'e="font-size: medium;">Click&nbsp;<strong>Alt F</strong>&nbsp;and select&nbsp;<s' +
                'trong>Settings</strong></span></li><li><span style="font-size: medium;">Scroll d' +
                'own and select&nbsp;<strong>Show advanced settings...</strong></span></li><li><s' +
                'pan style="font-size: medium;">Scroll down to the&nbsp;<strong>Network&nbsp;</st' +
                'rong>section and click on&nbsp;<strong>Change proxy settings...</strong></span><' +
                '/li><li><span style="font-size: medium;">Select the&nbsp;<strong>Advanced&nbsp;<' +
                '/strong>tab</span></li><li><span style="font-size: medium;">Scroll down to&nbsp;' +
                '<strong>Security&nbsp;</strong>category, manually check the option box for&nbsp;' +
                '<strong>Use TLS 1.1&nbsp;</strong>and&nbsp;<strong>Use TLS 1.2</strong></span></' +
                'li></ol><div class="content"><p><span style="font-size: medium;"><a id="Firefox"' +
                ' name="Firefox"></a><strong>Mozilla Firefox</strong></span></p></div><ol><li><sp' +
                'an style="font-size: medium;">Open&nbsp;<strong>Firefox</strong></span></li><li>' +
                '<span style="font-size: medium;">In the address bar, type&nbsp;<strong>about:con' +
                'fig</strong>&nbsp;and press Enter</span></li><li><span style="font-size: medium;' +
                '">In the&nbsp;<strong>Search&nbsp;</strong>field, enter&nbsp;<strong>tls</strong' +
                '>. Find and double-click the entry for&nbsp;<strong>security.tls.version.min</st' +
                'rong></span></li><li><span style="font-size: medium;">Set the integer value to 3' +
                ' to force protocol of TLS 1.3</span></li></ol><p><span style="font-size: medium;' +
                '"><a id="Opera" name="Opera"></a><strong>Opera</strong></span></p><ol><li><span ' +
                'style="font-size: medium;">Open&nbsp;<strong>Opera</strong></span></li><li><span' +
                ' style="font-size: medium;">Click&nbsp;<strong>Ctrl&nbsp;</strong>plus&nbsp;<str' +
                'ong>F12</strong></span></li><li><span style="font-size: medium;">Scroll down to ' +
                'the&nbsp;<strong>Network&nbsp;</strong>section and click on&nbsp;<strong>Change ' +
                'proxy settings...</strong></span></li><li><span style="font-size: medium;">Selec' +
                't the&nbsp;<strong>Advanced&nbsp;</strong>tab</span></li><li><span style="font-s' +
                'ize: medium;">Scroll down to&nbsp;<strong>Security&nbsp;</strong>category, manua' +
                'lly check the option box for&nbsp;<strong>Use TLS 1.1&nbsp;</strong>and&nbsp;<st' +
                'rong>Use TLS 1.2</strong></span></li></ol><p><span style="font-size: medium;"><s' +
                'trong>Apple Safari</strong></span></p><p><span style="font-size: medium;">There ' +
                'are no TLS settings on Apple Safari. Please ensure you are using version 7 or la' +
                'ter.</span></p></div>');
        document.write('<style>@import url("https://fonts.googleapis.com/css?family=Roboto");body{font-f' +
                'amily:"Roboto",sans-serif;margin:auto;max-width:700px;padding:10px;}</style>');

    }
});

//jquery to scroll animate
(function ($) {
    $.fn.goTo = function (offset) {
        $('html, body').animate({
            scrollTop: $(this)
                .offset()
                .top + offset + 'px'
        }, 'slow');
        return this; // for chaining...
    }
})(jQuery);

//Record Picker Functions
function searchForRecord(filterCriteria, search, field) {
    if (search.length >= 3) {

        $.ajax({
            url: "https://" + window.location.hostname + "/form/Form_Field_Picker?filterCriteria=" + filterCriteria + "&search=" + search,
            success: function (result) {
                if (result != null) {
                    recordPickerData[field].searchResults = result;
                    showRecordPickerOptions(field);
                } else {
                    recordPickerData[field].searchResults = undefined;
                    hideRecordPickerOptions(field);
                    console.log('no results returned');
                }

            }
        });
    }
}

let recordPickerData = {};

function showRecordPickerOptions(field) {
    hideRecordPickerOptions(field);
    let data = recordPickerData[field];
    let controllingField = data.controllingField;
    let resultContainer = document.createElement('div');
    resultContainer.className = 'record-picker-result-container';
    resultContainer.id = field + '_record-results';
    let searchResults = recordPickerData[field].searchResults;
    $(resultContainer).insertAfter(controllingField);

    for (let i = 0; i < searchResults.length; i++) {
        let resultItem = document.createElement('div');
        resultItem.className = 'record-picker-result-item';
        resultItem.innerHTML = searchResults[i][data.displayField];
        resultItem.id = searchResults[i].Id;
        $(resultContainer).append(resultItem);
    }

    $(resultContainer)
        .on('click', '.record-picker-result-item', function () {
            $(recordPickerData[field].originalField).val(this.id);
            $(recordPickerData[field].controllingField).val(this.textContent.replace(/^\s\s*/, '').replace(/\s\s*$/, ''));
            hideRecordPickerOptions(field);
        });
}

function hideRecordPickerOptions(field) {
    let existingResults = document.getElementById(field + '_record-results');
    if (existingResults) {
        existingResults.remove();
    }
}

function makeRecordPicker(field, filterCriteria, displayField) {

    let originalField = document.getElementById(field);
    let clone = originalField.cloneNode(true);

    recordPickerData[field] = {
        originalField: originalField,
        controllingField: clone,
        searchValue: '',
        searchResults: undefined,
        timeout: 500,
        displayField: displayField
    }
    clone.id = clone.id + '_clone';
    $(clone).attr('name', clone.id + '_clone');
    $(clone).insertAfter(originalField);
    $(clone).removeClass('required');
    $(originalField).addClass('sv-hide');

    $(clone).on('keyup', function (event) {

        let search = $(this)
            .val()
            .trim();
        if (search.length >= 3) {
            let oldValue = recordPickerData[field].searchValue;
            if (search != oldValue) {
                recordPickerData[field].searchValue = search;
                searchForRecord(filterCriteria, search, field);
            }
        } else {
            recordPickerData[field].searchValue = '';
            hideRecordPickerOptions(field);
        }
    });

    $(clone).on('focus', function (event) {
        recordPickerData[field].searchValue = '';
        $(recordPickerData[field].originalField).val('');
        $(recordPickerData[field].controllingField).val('');

        hideRecordPickerOptions(field);

    });

    $(clone).on('blur', function (event) {
        setTimeout(function () {
            if (!$(recordPickerData[field].originalField).val()) {
                $(recordPickerData[field].controllingField).val('');
            }
            hideRecordPickerOptions(field);
        }, 1000);
    });
}

// Functions for creating repeatable accordion blocks in the form.
function prepareRepeatSection() {
    $('legend:contains("(REPEATABLE FOLD)")')
        .each(function () {
            var titleElement = $(this);
            var containingFieldset = $(this).parent();
            containingFieldset.attr('original-id', containingFieldset.attr('id'));
            var strippedTitleElement = titleElement
                .clone()
                .attr('id', '');
            containingFieldset.addClass("repeated-accordion");
            containingFieldset.addClass("accordion-folded");
            titleElement.after(strippedTitleElement);
            titleElement.hide();
            foldButton = '<div class="fold-button">+</div>';

            containingFieldset.prepend('<div class="expandAll"><a onclick="expandAll();">Expand all</a></div>');
            strippedTitleElement.after(foldButton);
            strippedTitleElement.addClass('variable-header');
            var newTitle = strippedTitleElement
                .text()
                .replace(' (REPEATABLE FOLD)', '');
            strippedTitleElement.text(newTitle);
            strippedTitleElement.attr('default-title', newTitle);

            //strips text from label
            $(this)
                .parent()
                .find('label')
                .each(function () {
                    if ($(this).text().includes(' (FOLD_HEADER)')) {}
                });
            $(this)
                .parent()
                .find('input')
                .each(function () {
                    var inputElement = $(this);
                    if ($(this).attr('title') != undefined) {
                        if ($(this).attr('title').includes(' (FOLD_HEADER)')) {
                            // assigns the order of the header as attributes and adds classes to find during
                            // binding
                            headerOrder = $(this)
                                .attr('title')
                                .split(' (FOLD_HEADER)')[1]
                                .replace('[', "");
                            headerOrder = headerOrder.replace(']', "");
                            $(this).attr('header-order', headerOrder);
                            $(this).addClass('fold-header');
                            //removes the control text from the label element
                            var labelElement = inputElement
                                .parents('.oneField')
                                .find('label');
                            var replaceText = " (FOLD_HEADER)[" + headerOrder + ']';
                            labelElement.html(labelElement.html().replace(replaceText, ""));

                        }
                    }

                });
        });
    //starts the function for adding error badges to accordions.
    setInterval(function () {
        $('.errors-badge').remove();
        $('.repeated-accordion').each(function () {
            var numErrors = ($(this).find('.errMsg').length);
            if (numErrors > 0) {

                var elem = document.createElement('div');
                elem.className = 'errors-badge';
                elem.innerHTML = numErrors + ' errors';
                $(this).prepend(elem);
            }
        });
    }, 500)
}

function expandAll() {
    $
        .each($('.fold-button'), function () {
            $(this).addClass('fold-already-bound');
            $(this)
                .parents('.repeated-accordion')
                .removeClass('accordion-folded');
            $(this).text('-');
        });
}

function bindButtons(preventClose) {
    //unbinds to rebind (prevents the same event firing more than once)#
    $('input').off('focus.enterFold');
    $('input').on('focus.enterFold', function () {
        $(this)
            .parents('.repeated-accordion.accordion-folded')
            .find('.fold-button')
            .click();
    });

    $('.fold-button').off('click.fold');
    $('.fold-button').on('click.fold', function () {
        $(this).addClass('fold-already-bound');
        $(this)
            .parents('.repeated-accordion')
            .toggleClass('accordion-folded');
        if ($(this).text() == '+') {
            //closes other open windows
            $('.fold-button:contains("\-")')
                .each(function () {
                    $(this).click();
                });
            $(this).goTo(-70);
            //toggles text
            $(this).text('-');

        } else {
            $(this).text('+');
        }
    });
}

function bindNewButton() {
    $('.duplicateSpan').off('click.fold');
    $('.duplicateSpan').on('click.fold', function () {
        $('.fold-button:contains("\-")')
            .each(function () {
                $(this).click();
            });
        bindButtons();

        var newSectionHeader = $(this)
            .prev()
            .find('.variable-header');
        newSectionHeader
            .next()
            .click();
        newSectionHeader.text(newSectionHeader.attr("default-title"));
        newSectionHeader.goTo(-70);
        bindHeaders();
    });
}

function bindHeaders() {
    $('.fold-header')
        .each(function () {
            $(this).off('change.headerBindingNamespace');
            $(this).on('change.headerBindingNamespace', function () {
                //selects all other inputs on under this header
                var titleElement = $(this)
                    .parents('.repeated-accordion')
                    .find('.variable-header');
                var newTitleArray = [];
                // builds an array of the name using the order functions then joins the array
                // with spaces
                $(this)
                    .parents('.repeated-accordion')
                    .find('.fold-header')
                    .each(function () {
                        newTitleArray[$(this).attr('header-order')] = $(this).val();
                    });
                var newTitle = newTitleArray.join(" ");
                if (newTitle == " ") {
                    newTitle = titleElement.attr('default-title');
                }
                titleElement.text(newTitle);
            });
        });

}

function squareBracketEscaper(val) {
    val = val.replace('[', '\\[');
    val = val.replace(']', '\\]');
    return val;
}

function repeatableAccordion() {
    prepareRepeatSection();
    bindNewButton();
    bindButtons();
    bindHeaders();
}

// removes the FormAssembly CSS. N.B. Salesforce moves location of css so use
// 'span.wFormWebPage' for iframe and 'head' for full site.
if (window != window.top) {
    $('link[href*="wforms-layout.css"]').remove();
} else {
    $('link[href*="wforms-layout.css"]').remove();
}

$('span.wFormWebPage > link')
    .eq(0)
    .remove();

$('.wFormContainer > style').remove();

// Adds required classes for Bootstrap as well as custom CSS and Fonts once the
// page has been loaded
$(document).ready(function () {
    // detects if the formID contains a questionmark and changes a value to show the
    // Subject Area of Interest fields then hides that field.
    if (window.location.href == "https://join.lse.ac.uk/events/TargetX_Eventsb__formpage?formid=217735?&") {
        $('#tfa_1620').val("tfa_1622");
    };
    $('#tfa_1618').hide();

    //adds in the Goolge fonts Roboto and Libre Baskerville
    WebFontConfig = {
        google: {
            families: ['Roboto::latin', 'Libre+Baskerville::latin']
        }
    };
    (function () {
        var wf = document.createElement('script');
        wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s
            .parentNode
            .insertBefore(wf, s);
    })();

    //styles radios and check boxes
    var $span = $("span.choices.vertical > span.oneChoice");
    $span.replaceWith(function () {
        return $('<div/>', {
            class: 'sv-btn sv-btn-default select-item',
            html: this.innerHTML
        });
    });
    var $span = $("span.choices.vertical");
    $span.replaceWith(function () {
        return $('<div/>', {
            class: 'sv-btn-group sv-btn-group-justified',
            html: this.innerHTML
        });
    });

    //Adds Custom Classes/data-attributes
    $('.wFormContainer').addClass("sv-container");
    $('.primaryAction').addClass("sv-btn sv-btn-primary sv-center-block");
    $('.wfPagePreviousButton').addClass("sv-btn sv-btn-primary sv-center-block");
    $('.wfPageNextButton').addClass("sv-btn sv-btn-primary sv-center-block");

    //Adds Logo
    $('.sv-container').prepend('<a class="logo-link" href=\"//lse.ac.uk/home.aspx\"> <img class=\"logo-image\" s' +
            'rc=\"https://lseapps.secure.force.com/static/resource/FormAssets/London-school-o' +
            'f-economics-logo-with-name.svg\"><\/a>');
    $('.logo-link').wrap("<div class='logo'></div>");

    // Groups the phone elements together. Dialling Code MUST preceed the phone
    // number and be named as such.
    $(".label:containsCI(dialling code)").addClass("dialcode");
    $(".label:containsCI(dialling code)")
        .parent()
        .addClass("phone-element phone-element-dial");
    $('.phone-element')
        .next()
        .addClass("phone-element phone-element-number");
    $('.phone-element').wrapAll("<div class='phone' />");

    //Adds bootstrap rows
    $('fieldset > div.oneField').addClass("sv-row");

    //Unwraps InputWrapper and adds bootstrap form controls/style
    $('.inputWrapper')
        .children()
        .unwrap();
    $('.oneField').addClass('sv-form-group');
    $('.sv-form-group input').addClass('sv-form-control');
    $('.sv-form-group select').addClass('sv-form-control');
    $('.sv-form-group textarea').addClass('sv-form-control');

    var title = new URL(window.location)
        .searchParams
        .get('title');
    if (title) {
        $('.wFormTitle').html(title + ' registration');
    }

    // adds and removes the 'full' class when an user tries to exceed the maximum
    // length for an input
    $("input")
        .keypress(function (e) {
            if ($(this).attr("maxlength")) {
                if (($(this).val().length) == $(this).attr("maxlength")) {
                    $(this).addClass("full");
                } else {
                    $(this).removeClass("full");
                };
            };
        });
    $("input").keyup(function (e) {

        if ($(this).attr("maxlength")) {
            if (($(this).val().length) == $(this).attr("maxlength")) {
                $(this).removeClass("full");
            } else {
                $(this).removeClass("full");
            };
        }
    });

    // removes the masks from fields if the user is using an Android device as this
    // does not work properly.
    var ua = navigator
        .userAgent
        .toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
        $('input').removeAttr("autoformat");
    }

    // Hides any fields with "(HIDDEN)" in the name without affecting
    // picklists/functionality

    $('label:contains("(HIDDEN)")')
        .each(function () {
            $(this)
                .parent()
                .css("visibility", "hidden")
                .outerHeight(0)
                .css("margin", "0");
        });

    // FormAssembyly have added javascript in that runs afer document.ready() that
    // wraps the div above any length indicators for fields into a div with the
    // display:none style attribute. This function checks to see if it has happened
    // and clears it so that it is visible again.
    var reDisplayFields = setInterval(function () {
        $('.lengthIndicator')
            .parent()
            .each(function () {
                if ($(this).attr("style") == 'position: relative; display: none;') {
                    $(this).attr("style", "");
                    reDisplayFields.clearInterval();
                }
            });
    }, 700);

    //replaces Assistance link with legal Disclaimer Text.
    var DisclaimerEmail = '<a href=\"mailto:';
    DisclaimerEmail += $('input[type="hidden"]')
        .eq(0)
        .val();
    DisclaimerEmail += "\"  target=\"_top\">";
    DisclaimerEmail += $('input[type="hidden"]')
        .eq(0)
        .val();
    DisclaimerEmail += "<\/a>";

    var DisclaimerDataProtection = '<a href=\"';
    DisclaimerDataProtection += $('input[type="hidden"]')
        .eq(1)
        .val();
    DisclaimerDataProtection += '\">Data Protection Policy<\/a>';
    var DisclaimerText = "All fields marked <span class='RequiredField'>*</span> are compulsory.<p></p>";

    DisclaimerText += $('input[type="hidden"]')
        .eq(2)
        .val();

    DisclaimerText = DisclaimerText.replace('{!Email}', DisclaimerEmail);
    DisclaimerText = DisclaimerText.replace('{!DataProtection}', DisclaimerDataProtection);
    $('form').append(DisclaimerText);
    //marks required fields with _*. Reflows text and star together.
    $('.reqMark').append('<span class="RequiredField"">â€‡*</span>');
    //hides the school picker when the window changes size
    $(window).resize(function () {
        $('ul').hide();
    });

    //sets fields which contain "Email address" to lower case.
    setTimeout(function () {
        $('input[type="text"]')
            .each(function () {
                var fieldTitle = $(this)
                    .attr('title')
                    .toUpperCase();
                if (fieldTitle.indexOf('EMAIL') >= 0) {
                    $(this).addClass('lowercase');
                    $(this).on('keyup', function () {
                        $(this).val($(this).val().toLowerCase());
                    });
                }
            });
    }, 600);

    //adds a colour to any radio buttons that say 'Decline'
    $('input[type="radio"]+label:contains("Decline")').addClass('decline-btn');

    // var tempAlertText = "Please note that from <u>02:00 - 04:00 BST on Monday 8th
    // May</u> this form will be down for scheduled maintenance and will not submit.
    // If you receive an unexpected error, please try again outside of these
    // hours."; Temporary alert message $('.wForm>form').prepend("<div
    // style=\"margin-top:20px;\" class=\"sv-alert sv-alert-info\"><i class=\"fa
    // fa-info-circle\"><\/i> \r\n " + tempAlertText + " \r\n<\/div>"); bugfix for
    // school picker field to not allow submission if a school hasn't been picked.
    $('.ui-autocomplete-input').on('blur', function () {
        var idValue = $(this)
            .parents('.oneField')
            .children('input')
            .not('.ui-autocomplete-input')
            .val();
        if (!idValue) {
            $(this).val('');
        }
    });

    //allows radiobuttons to be required
    $('.sv-form-control[type="radio"]').each(function () {
        let parent = $(this)
            .parents('.oneField')
            .not('.required');
        if (parent.attr('aria-required') == 'true') {
            parent.addClass('required');
        }
    });
});