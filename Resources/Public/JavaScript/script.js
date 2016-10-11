"use strict";String.prototype.format=function(){var t=arguments,e=0;return this.replace(/(%(s|d))/g,function(s){var n;switch(s){case"%d":n=parseInt(t[e]),isNaN(n)&&(n=0);break;default:n=t[e]}return++e,n})},function(t){var e=function(e,s){this.$element=t(e),this.options=t.extend({},this.options,s||{}),this.init()};e.prototype={$element:null,options:{},filter:null,userSettings:null,ajaxUrl:null,$tableInner:null,$numberOfRecords:null,$page:null,$pagesMax:null,controls:{$first:null,$previous:null,$next:null,$last:null},init:function(){this.filter=this.$element.data("filter"),this.userSettings=this.$element.data("settings"),this.ajaxUrl=this.$element.data("ajaxUrl"),this.$tableInner=this.$element.find(".urlTable__body__inner"),this.$numberOfRecords=this.$element.find(".numberOfRecords"),this.$page=this.$element.find(".paginator-input"),this.$pagesMax=this.$element.find(".pagesMax"),this.controls.$first=this.$element.find(".js-paginationFirst"),this.controls.$previous=this.$element.find(".js-paginationPrevious"),this.controls.$next=this.$element.find(".js-paginationNext"),this.controls.$last=this.$element.find(".js-paginationLast"),this.controls.$reload=this.$element.find(".js-reload"),this.initListener(),this.loadUrls()},initListener:function(){var t=this;this.controls.$reload.click(function(){t.loadUrls()})},loadUrls:function(){var e=this;this.$tableInner.html('<div class="urlTable__row"><span class="urlTable__column urlTable__column--fullWidth">%s</span></div>'.format(tx_naworkuri_labels.loadingMessage)),t.getJSON(this.ajaxUrl,{tx_naworkuri_naworkuri_naworkuriuri:{filter:this.filter}},function(t){t&&(t.html&&t.html.length>0&&e.$tableInner.html(t.html),t.start&&t.end&&e.$numberOfRecords.text(tx_naworkuri_labels.numberOfRecords.format(t.start,t.end)),t.page&&t.pagesMax&&(e.$page.val(t.page),e.$pagesMax.text(t.pagesMax),t.page>1?(e.controls.$first.removeClass("disabled"),e.controls.$previous.removeClass("disabled")):(e.controls.$first.addClass("disabled"),e.controls.$previous.addClass("disabled")),t.page<t.pagesMax?(e.controls.$next.removeClass("disabled"),e.controls.$last.removeClass("disabled")):(e.controls.$next.addClass("disabled"),e.controls.$last.addClass("disabled"))))})}},t.fn.UrlModule=function(s){return this.each(function(n,l){t(l).data("urlModule",new e(l,s))})},t(document).ready(function(){t(".urlTable").UrlModule()})}(jQuery);