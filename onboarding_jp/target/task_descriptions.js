(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
hasMouse = false; //!('ontouchstart' in window);

taskDescriptions = {
  descriptions: [
  // hasMouse ?
  //     {
  //       key: 'Drag', label: 'Drag this data file into CODAP', url: './resources/DragCSV.mp4',
  //       operation: 'dataContextCountChanged',
  //       feedback: <div>
  //         <p>You've got data! It appears in a <em>case table</em>.</p>
  //         <p>Each row in the table represents a <em>case</em> and each column
  //           represents an <em>attribute</em>.</p>
  //         <p>This data set contains data about mammals. Each case represents a different
  //           mammal. The attributes provide information about lifespan, height, and so on.</p>
  //       </div>
  //     } :
  //     {
  //       key: 'MakeTable', label: 'Make a table showing Mammals data', url: './resources/MakeTable.mp4',
  //       feedback: <div>
  //         <p>You made a <em>case table</em> showing the pre-loaded data.</p>
  //         <p>Each row in the table represents a <em>case</em> and each column
  //           represents an <em>attribute</em>.</p>
  //         <p>This data set contains data about mammals. Each case represents a different
  //           mammal. The attributes provide information about lifespan, height, and so on.</p>
  //       </div>
  //     },
  {
    key: 'MakeGraph', label: 'グラフを作成する。', url: './resources/MakeGraph.mp4',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'とても素敵なグラフですね。各ポイントは、あなたのデータセットの中の1つのケースを表しています。'
      ),
      React.createElement(
        'p',
        null,
        'まだ配置を決めていないため、現時点ではランダムに点が散らばっています。'
      )
    ),
    alt_feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'とても素敵なグラフですね。'
      ),
      React.createElement(
        'p',
        null,
        'まだデータをドラッグしてないので、ポイント（点）はありません。'
      )
    )
  }, {
    key: 'MoveComponent', label: '表やグラフを移動する', url: './resources/MoveGraph.mp4',
    operation: 'move', type: ['DG.GraphView', 'DG.TableView'],
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        ' ',
        React.createElement(
          'em',
          null,
          ''
        ),
        ' グラフの軸に属性をクリック＆ドラッグして動かせましたね！'
      ),
      React.createElement(
        'p',
        null,
        '',
        React.createElement(
          'em',
          null,
          ''
        ),
        ' グラフの右下の角をドラッグすることで大きさを変えることができます。'
      )
    )
  },
  /*
      {
        key: 'selectCases', label: 'Select some cases by …', url: 'movie url',
        operation: 'selectCases', type: '',
        feedback: <div>
          <p>You selected some cases!</p>
        </div>
      },
  */

  {
    key: 'AssignAttribute', label: 'グラフの軸に属性をドラッグする', url: './resources/DragAttribute.mp4',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'よくできました！表からグラフ軸に属性をドラッグできました。'
      ),
      React.createElement(
        'p',
        null,
        'これで、ポイント（点）は属性値に従って配置されました！'
      ),
      React.createElement(
        'p',
        null,
        '他の属性値に置き換えたり、別のグラフ軸にドラッグすることで散布図を作ることができます。'
      )
    )
  }, {
    key: 'SecondAttribute', label: 'グラフの軸に第2属性をドラッグする', url: './resources/Drag2ndAttribute.mp4',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'やりましたね！2つ目の属性をグラフにドラッグしました。'
      ),
      React.createElement(
        'p',
        null,
        '',
        React.createElement(
          'em',
          null,
          ''
        ),
        ' 1つのグラフに2つの属性が表示された2変量のグラフです。'
      ),
      React.createElement(
        'p',
        null,
        'どちらかの属性を違う属性に置き換えたり、グラフの中央に属性をドラッグすると凡例をつくることもできます。'
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
    'おめでとうございます！あなたは以下のすべてを達成しました:'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      'CODAPにデータをドラッグする'
    ),
    React.createElement(
      'li',
      null,
      'グラフを作成する'
    ),
    React.createElement(
      'li',
      null,
      '表やグラフを移動させる'
    ),
    React.createElement(
      'li',
      null,
      '属性をグラフの軸にいれる'
    ),
    React.createElement(
      'li',
      null,
      'グラフに2つの属性値を表示する'
    )
  ),
  React.createElement(
    'p',
    null,
    'You can do a ',
    React.createElement(
      'em',
      null,
      'lot'
    ),
    ' with just those five skills!'
  ),
  React.createElement(
    'p',
    null,
    'この4つのスキルだけでたくさんのことができます！　もっとCODAPについて知りたい場合は、 ',
    React.createElement(
      'a',
      { href: 'https://codap.concord.org/help/', target: '_blank' },
      'CODAP Help'
    ),
    'ページへ'
  ),
  React.createElement(
    'button',
    { onClick: this.startOver },
    'Start Over'
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
      'CODAP's data interactive GitHub repository.'
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
