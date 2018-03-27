import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public content = `
    <button id="ctaButton" class="SecondPage">
      BOOM
    </button>
  `;

  public content_2 = `    <div class="col span_12 dark left">
  <div class="vc_col-sm-4 wpb_column column_container vc_column_container col no-extra-padding instance-0" data-border-radius="none" data-shadow="none" data-border-animation="" data-border-animation-delay="" data-border-width="none" data-border-style="solid" data-border-color="" data-bg-cover="" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-hover-bg="" data-hover-bg-opacity="1" data-animation="" data-delay="0">
      <div class="vc_column-inner">
          <div class="wpb_wrapper">
              <div class="nectar_image_with_hotspots " data-stlye="color_pulse" data-hotspot-icon="plus_sign" data-size="medium" data-color="accent-color" data-tooltip-func="hover" data-tooltip_shadow="none" data-animation=""><img width="1280" height="720" src="http://www.fundacionhaiko.org/wp-content/uploads/2018/02/home_2.png" class="attachment-full size-full" alt="" srcset="http://www.fundacionhaiko.org/wp-content/uploads/2018/02/home_2.png 1280w, http://www.fundacionhaiko.org/wp-content/uploads/2018/02/home_2-300x169.png 300w, http://www.fundacionhaiko.org/wp-content/uploads/2018/02/home_2-768x432.png 768w, http://www.fundacionhaiko.org/wp-content/uploads/2018/02/home_2-1024x576.png 1024w, http://www.fundacionhaiko.org/wp-content/uploads/2018/02/home_2-600x338.png 600w" sizes="(max-width: 1280px) 100vw, 1280px"></div>
          </div> 
      </div>
  </div> 

  <div class="vc_col-sm-4 wpb_column column_container vc_column_container col no-extra-padding instance-1" data-border-radius="none" data-shadow="none" data-border-animation="" data-border-animation-delay="" data-border-width="none" data-border-style="solid" data-border-color="" data-bg-cover="" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-hover-bg="" data-hover-bg-opacity="1" data-animation="" data-delay="0">
      <div class="vc_column-inner">
          <div class="wpb_wrapper">
              
  <div class="wpb_text_column wpb_content_element ">
      <div class="wpb_wrapper">
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

      </div>
  </div>

          </div> 
      </div>
  </div> 

  <div class="vc_col-sm-4 wpb_column column_container vc_column_container col no-extra-padding instance-2" data-border-radius="none" data-shadow="none" data-border-animation="" data-border-animation-delay="" data-border-width="none" data-border-style="solid" data-border-color="" data-bg-cover="" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-hover-bg="" data-hover-bg-opacity="1" data-animation="" data-delay="0">
      <div class="vc_column-inner">
          <div class="wpb_wrapper">
              
  <div class="wpb_text_column wpb_content_element ">
      <div class="wpb_wrapper">
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

      </div>
  </div>

          </div> 
      </div>
  </div> 
</div>`;


  public ctaButton: any;
  constructor(public navCtrl: NavController) {}

  // ionViewDidLoad() {
  //   this.ctaButton = document.getElementById('ctaButton').addEventListener('click', () => {
  //     const butttonCSSClassList: string = document.getElementById('ctaButton').className;

  //     let pageToNavigate = butttonCSSClassList.replace(/ .*/, '');

  //     console.log(pageToNavigate);
  //     this.navCtrl.push(pageToNavigate);
  //   });
  // }
}
