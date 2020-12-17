import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './QuickLinksWebPart.module.scss';
import * as strings from 'QuickLinksWebPartStrings';

// import './LinksStyle.css';
require('./QuckLinksWebPart..scss')
export interface IQuickLinksWebPartProps {
  description: string;
  Link1: string;
  Link1Text: string;
  LinkImage1: string;
  Link2: string;
  Link2Text: string;
  LinkImage2: string;
  Link3: string;
  Link3Text: string;
  LinkImage3: string;
  Link4: string;
  Link4Text: string;
  LinkImage4: string;
  Link5: string;
  Link5Text: string;
  LinkImage5: string;
  Link6: string;
  Link6Text: string;
  LinkImage6: string;
  Link7: string;
  Link7Text: string;
  LinkImage7: string;
  Link8: string;
  Link8Text: string;
  LinkImage8: string;
  Link9: string;
  Link9Text: string;
  LinkImage9: string;
}

export default class QuickLinksWebPart extends BaseClientSideWebPart<IQuickLinksWebPartProps> {

  public render(): void {
    let NumberOfActiveLinks = 0;
    if(this.properties.Link1!=""){
      NumberOfActiveLinks += 1
    }
    if(this.properties.Link2!=""){
      NumberOfActiveLinks += 1
    }
    if(this.properties.Link3!=""){
      NumberOfActiveLinks += 1
    }
    if(this.properties.Link4!=""){
      NumberOfActiveLinks += 1
    }
    if(this.properties.Link5!=""){
      NumberOfActiveLinks += 1
    }
    if(this.properties.Link6!=""){
      NumberOfActiveLinks += 1
    }
    if(this.properties.Link7!=""){
      NumberOfActiveLinks += 1
    }
    if(this.properties.Link8!=""){
      NumberOfActiveLinks += 1
    }

    if(NumberOfActiveLinks!=0 && NumberOfActiveLinks!=8){
      NumberOfActiveLinks = (100- 12.5*NumberOfActiveLinks)/2;
    }
    else NumberOfActiveLinks = 0;

    let MarginLeft = NumberOfActiveLinks.toString() + "%";

    let html = `
      <div class="LinksWrapper">
        <div class="LinksWrapper-Raw" style="padding-left:${MarginLeft}">`
        if(this.properties.Link1!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link1)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage1)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link1)}">${escape(this.properties.Link1Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link2!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link2)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage2)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link2)}">${escape(this.properties.Link2Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link3!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link3)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage3)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link3)}">${escape(this.properties.Link3Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link4!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link4)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage4)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link4)}">${escape(this.properties.Link4Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link5!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link5)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage5)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link5)}">${escape(this.properties.Link5Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link6!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link6)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage6)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link6)}">${escape(this.properties.Link6Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link7!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link7)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage7)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link7)}">${escape(this.properties.Link7Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link8!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link8)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage8)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link8)}">${escape(this.properties.Link8Text)}</a>
          </div>
        </div>`
        }
        if(this.properties.Link9!="")
        {
          html +=`<div class="LinksTab">
          <div class="LinkImage">
            <a href="${escape(this.properties.Link9)}"><img class="ImageInLink" src="${escape(this.properties.LinkImage9)}"></a>
          </div>
          <div class="LinkText">
            <a href="${escape(this.properties.Link9)}">${escape(this.properties.Link9Text)}</a>
          </div>
        </div>`
        }
        html +=`</div>
        </div>`;
      this.domElement.innerHTML = html;
  }

  // protected get dataVersion(): Version {
  //   return Version.parse('1.0');
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Link 1',
              groupFields: [
                PropertyPaneTextField('Link1', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage1', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link1Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 2',
              groupFields: [
                PropertyPaneTextField('Link2', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage2', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link2Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 3',
              groupFields: [
                PropertyPaneTextField('Link3', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage3', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link3Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 4',
              groupFields: [
                PropertyPaneTextField('Link4', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage4', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link4Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 5',
              groupFields: [
                PropertyPaneTextField('Link5', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage5', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link5Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 6',
              groupFields: [
                PropertyPaneTextField('Link6', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage6', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link6Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 7',
              groupFields: [
                PropertyPaneTextField('Link7', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage7', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link7Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 8',
              groupFields: [
                PropertyPaneTextField('Link8', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage8', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link8Text', {
                  label: 'Enter link description'
								})
              ]
            },
            {
              groupName: 'Link 9',
              groupFields: [
                PropertyPaneTextField('Link9', {
                  label: 'Enter link to page'
                }),
                PropertyPaneTextField('LinkImage9', {
                  label: 'Enter link to image'
                }),
                PropertyPaneTextField('Link9Text', {
                  label: 'Enter link description'
								})
              ]
            }
          ]
        }
      ]
    };
  }
}
