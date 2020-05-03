/*
 * Example plugin template
 */

jsPsych.plugins["triplet"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('triplet', 'stimulus');

  plugin.info =  [{
    name: "triplet",
    parameters: {
      set_size: {
        type: jsPsych.plugins.parameterType.IMAGE, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        pretty_name: 'stimuli',
        array: true,
        default: undefined,
        description: 'The image to be displayed'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'It can be used to provide a reminder about the action the subject is supposed to take.'
      },
      prompt_location: {
        type: jsPsych.plugins.parameterType.SELECT,
        pretty_name: 'Prompt location',
        options: ['above','below'],
        default: 'above',
        description: 'Indicates whether to show prompt "above" or "below" the sorting area.'
      },
    }
  }]

  display_element.innerHTML = html;

  var html = "";

  if (trial.prompt == null && trial.prompt_location == "above")


  plugin.trial = function(display_element, trial) {
    var stim = [];
    for (var i = 1; i < trial.stimuli.length; i++) {
      stim.push('img/select_asym/asym_00' + i + " _2D_ort.png");
      stim.push("img/select_asym/asym_00" + i + "_3D_per.png");
      stim.push("img/select_sym/sym_00" + i + "_3D_ort.png");
      stim.push("img/select_sym/sym_00" + i + "_3D_per.png");
    }
  }

    // data saving  
    var trial_data = {
      parameter_name: 'parameter value'
    }

    // end trial
    jsPsych.finishTrial(trial_data);
  }
  return plugin;
})();