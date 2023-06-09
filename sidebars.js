/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 //tutorialSidebar: [{type: '

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    
    {
      
      type: 'category',
      label: 'Thai',
      
      link: {
        type: 'generated-index',
        title: 'Choose what you like!',
        description: 'Learn about the most important dishes from Thailand! They comprise of many delicacies as shown. For example,',
        
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      
      
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Arabic',
      link: {
        type: 'generated-index',
        title: 'Choose what you like!',
        description: 'Learn about the most important dishes from  the middle east! They comprise of many delicacies as shown. For example,',
        
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      //id: 'arabic',
      items: ['Falafel','Hummus'],
    },
    //"tutorial-basics/create-a-page",
    /*{
      type: 'category',
      label: 'Intro',
      items: ['MiddleEast']
    }*/
  ],
   
};

module.exports = sidebars;
