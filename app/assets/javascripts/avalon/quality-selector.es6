export default class QualitySelector {
  changeQualityMarkup (markup, original, replacement) { var re = new RegExp(original, 'g'); return markup.replace(re, replacement) }

  currentQuality (windowLocationHash) {
    return windowLocationHash.split('/quality/')[1]
  }

  qualityChoices (obj, stack, choices) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] === 'object') {
          if (obj.type === 'Choice') {
            choices.push(obj.items)
          }
          this.qualityChoices(obj[property], stack + '.' + property, choices)
        }
      }
    }
    return choices[0]
  }

  renderChoices (ch) {
    var choiceList = ch.map((choice) => { return `<li class='quality-choice' data-quality-choice='${choice.id}'>${choice.label}</li>` })
    return `<ul>${choiceList}</ul>`
  }
}
