(this.webpackJsonpreact_task3=this.webpackJsonpreact_task3||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),u=a(2),o=a.n(u),r=(a(12),a(3)),s=a(4),c=a(5),m=a(6),l=(a(13),function(t){Object(m.a)(a,t);var e=Object(c.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={time:n.props.time,timeauto:n.props.timeauto,autostart:!0},n}return Object(s.a)(a,[{key:"startTime",value:function(){var t=this;this.countdown=setInterval((function(){0===t.state.time?t.setState({time:t.props.time}):t.setState({time:t.state.time-1})}),1e3)}},{key:"pauseTime",value:function(t){clearInterval(t)}},{key:"componentDidMount",value:function(){var t=this;if(this.state.autostart)return this.countdownAuto=setInterval((function(){0===t.state.timeauto?t.setState({timeauto:t.props.timeauto}):t.setState({timeauto:t.state.timeauto-1})}),1e3*this.props.step)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f \u0447\u0430\u0441\u0443: ",this.state.time," \u0441\u0435\u043a"),i.a.createElement("button",{onClick:function(){return t.startTime()}},"Start"),i.a.createElement("button",{onClick:function(){return t.pauseTime(t.countdown)}},"Pause"),i.a.createElement("h1",null,"\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f \u0447\u0430\u0441\u0443: ",this.state.timeauto," \u0441\u0435\u043a"),i.a.createElement("button",{onClick:function(){return t.pauseTime(t.countdownAuto)}},"Pause"))}}]),a}(n.Component));var p=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l,{time:"10",timeauto:"20",step:"2"}))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root"))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.4ae9dbc1.chunk.js.map