(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
hasMouse = false; //!('ontouchstart' in window);

taskDescriptions = {
  descriptions: [{
    key: 'MakeScatterplot', label: '身長vs年齢の散布図を作ってください。',
    url: './resources/MakeScatterplot.mp4',
    operation: 'attributeChange', type: '',
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        '',
        React.createElement(
          'em',
          null,
          ''
        ),
        '',
        React.createElement(
          'em',
          null,
          ''
        ),
        ' 素晴らしい散布図ですね。縦軸に身長、横軸に年齢があるといいですね。'
      )
    )
  }, {
    key: 'SelectCases', label: '選択範囲をドラッグして複数のポイントを囲んでください。',
    url: './resources/SelectCases.mp4',
    operation: 'selectCases',
    constraints: [{ property: 'cases', value: true }],
    prereq: 'MakeScatterplot',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'OKです。データが選択されました。'
      ),
      React.createElement(
        'p',
        null,
        'これらは、より詳しく見ていきたいデータです。'
      )
    )
  }, {
    key: 'HideUnselected', label: '選択されていないデータを非表示にしてください。',
    url: './resources/HideUnselected.mp4',
    operation: 'hideUnselected', type: '',
    prereq: 'SelectCases',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        '選択されていない他のケースはすっきりと片付きました。'
      ),
      React.createElement(
        'p',
        null,
        '次はグラフの大きさを変える必要があるかもしれません。'
      )
    )
  }, {
    key: 'Deselect', label: '表中のデータを含むすべてのデータを選択解除します。',
    url: './resources/Deselect.mp4',
    operation: 'selectCases',
    constraints: [{ property: 'cases', value: false }],
    prereq: 'HideUnselected',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        '',
        React.createElement(
          'em',
          null,
          '選択も重要ですが、選択しないことも重要です！'
        )
      )
    )
  }, {
    key: 'Rescale', label: 'グラフの大きさを修正してください。',
    url: './resources/Rescale.mp4',
    operation: 'rescaleGraph', type: '',
    prereq: 'HideUnselected',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        '',
        React.createElement(
          'em',
          null,
          ''
        ),
        ' グラフの大きさ修正をしたことで、すべてのポイントが見えるようにできる限り広げることができました。'
      )
    )
  }, {
    key: 'MakeLegend', label: '散布図に性別を凡例として追加してください。',
    url: './resources/MakeLegend.mp4',
    operation: 'legendAttributeChange', type: 'DG.GraphModel',
    constraints: [{ property: 'attributeName', value: '性別' }],
    prereq: 'MakeScatterplot',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        '素晴らしい！凡例と同じように、ポイントがきれいに色づけされていますね。'
      ),
      React.createElement(
        'p',
        null,
        'プロからのアドバイス：凡例キーをクリックすると、1つのカテゴリーのすべてのポイントを選択することができます。'
      )
    )
  }],
  getFeedbackFor: function (iKey, iUseAltFeedback, iAllAccomplished) {
    let tDesc = this.descriptions.find(function (iDesc) {
      return iKey === iDesc.key;
    });
    let tFeedback = iUseAltFeedback ? tDesc.alt_feedback : tDesc.feedback;
    if (iAllAccomplished) {
      tFeedback = React.createElement(
        'div',
        null,
        tFeedback,
        allAccomplishedFeedback
      );
    }
    return tFeedback;
  },
  taskExists: function (iKey) {
    return this.descriptions.find(function (iDesc) {
      return iKey === iDesc.key;
    });
  }
};

allAccomplishedFeedback = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'おめでとうございます。あなたは以下のことを行いました：'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      '散布図の作成'
    ),
    React.createElement(
      'li',
      null,
      '',
      React.createElement(
        'em',
        null,
        ''
      ),
      '選択範囲を使って、有用なデータを選択'
    ),
    React.createElement(
      'li',
      null,
      '必要のないデータを非表示にする'
    ),
    React.createElement(
      'li',
      null,
      '散布図の大きさを修正してポイントを分散して表示する'
    ),
    React.createElement(
      'li',
      null,
      'グラフに凡例値を追加'
    ),
    React.createElement(
      'li',
      null,
      'すべてのデータを非選択にする'
    )
  ),
  React.createElement(
    'p',
    null,
    'これらはCODAPの有用なスキルです！'
  )
);

infoFeedback = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'このCODAP研修用プラグインは新しいCODAPユーザーのために作られました。iFrameとして動いています。特定のユーザーのアクションによってCODAPがプラグインに通知することになり、プラグインはユーザーへフィードバックを送信します。'
  ),
  React.createElement(
    'p',
    null,
    'オープンソースコードは',
    React.createElement('br', null),
    React.createElement(
      'a',
      { href: 'https://github.com/concord-consortium/codap-data-interactives/tree/master/onboarding',
        target: '_blank' },
      'CODAP\'s data interactive GitHub repository.'
    ),
    'にあります。 '
  ),
  React.createElement(
    'p',
    null,
    'このプラグインはthe CODAP data interactive plugin APIを使用しています。',
    React.createElement('br', null),
    React.createElement(
      'a',
      { href: 'https://github.com/concord-consortium/codap/wiki/CODAP-Data-Interactive-Plugin-API',
        target: '_blank' },
      'CODAP Data Interactive API'
    ),
    '.'
  )
);

},{}]},{},[1]);
