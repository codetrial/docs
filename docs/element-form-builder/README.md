# Element Form Builder

使用 JSON 配置构建 Element UI 动态表单，支持任意自定义组件。

在线预览：

- [Form Builder](https://element-form-builder.now.sh)

![Screen Capture](/preview/element-form-builder.gif)

仓库地址：

- Component - [codetrial/element-form-builder](https://github.com/codetrial/element-form-builder)
- Demo - [Simple Form Builder](https://github.com/codetrial/element-form-builder/tree/develop/examples/simple-demo)

主要技术：

- Vue
- Element UI

## 使用文档

首先你需要有一个 element-ui 项目。如果没有，推荐使用下面的 preset 快速创建一个。

```bash
vue create --preset codetrial/vue-cli-plugin-element your-project
```

### 安装

```bash
yarn add element-form-builder
# OR
npm i element-form-builder
```

### 注册组件

```javascript
import FormBuilder from 'element-form-builder'

Vue.use(FormBuilder)
```

### 见证奇迹的时刻

Vue 模板:

```html
<el-form-builder :config="formConfig" v-model="formValues" label-width="80px">
</el-form-builder>
```

Vue 组件:

```javascript
export default {
  name: 'some-component',
  data() {
    return {
      formValues: {
        title: 'Some Awesome Title'
      },

      formConfig: {
        rules: {
          title: [{ required: true, message: '请输入标题' }]
        },
        elements: [
          {
            tag: 'el-input',
            item: {
              label: '标题'
            },
            detail: {
              name: 'title'
            }
          }
        ]
      }
    }
  }
}
```

## 配置规则

```js
/**
 * @namespace config
 * @property {array}   config.elements        - 表单元素配置
 * @property {object}  config.rules           - 校验规则
 */
const config = {
  elements: [
    /**
     * @namespace
     * @property {string}  tag               - 组件名
     * @property {object}  item              - Form Item Attributes
     * @property {string}  detail            - Form Element Attributes
     *
     * @see {@link http://element-cn.eleme.io/#/zh-CN/component/form#form-item-attributes}
     */
    {
      tag: 'el-input',
      item: {
        label: '描述'
      },
      detail: {
        name: 'desc',
        type: 'textarea'
      }
    },

    {
      tag: 'el-radio',
      item: {
        label: '地区'
      },
      /**
       * @namespace detail
       * @property {array}   detail.items                - 选项组
       * @property {string}  detail.items[].text         - 展示文本
       * @property {string}  detail.items[].label        - 值
       *
       * @see {@link http://element-cn.eleme.io/#/zh-CN/component/radio#dan-xuan-kuang-zu}
       */
      detail: {
        name: 'area',
        items: [{ text: '北京', label: '1' }, { text: '上海', label: '2' }]
      }
    },

    {
      tag: 'el-checkbox',
      item: {
        label: '主题'
      },
      /**
       * @namespace detail
       * @property {array}   detail.items                - 选项组
       * @property {string}  detail.items[].text         - 展示文本
       * @property {string}  detail.items[].label        - 值
       *
       * @see {@link http://element-cn.eleme.io/#/zh-CN/component/checkbox#duo-xuan-kuang-zu}
       */
      detail: {
        name: 'subject',
        items: [{ text: '历史', label: '1' }, { text: '战争', label: '2' }]
      }
    },

    {
      tag: 'el-select',
      item: {
        label: '标签'
      },
      /**
       * @namespace detail
       * @property {array}   detail.items                - 选项组
       * @property {string}  detail.items[].label        - 展示文本
       * @property {string}  detail.items[].value        - 值
       *
       * @see {@link http://element-cn.eleme.io/#/zh-CN/component/select}
       */
      detail: {
        name: 'tag',
        multiple: true,
        items: [{ label: '温暖', value: '1' }, { label: '感动', value: '2' }]
      }
    }
  ],
  /**
   * @namespace
   * @property {array}  desc                - 描述 字段的校验规则
   */
  rules: {
    desc: [
      { required: true, message: '请输入描述' },
      { max: 20, message: '最多 20 个字符' }
    ]
  }
}
```
