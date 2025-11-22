// Vue.js完整主题数据
const vueTopics = [
    {
        category: "基础概念",
        topics: [
            {
                name: "Vue实例",
                description: "每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的。Vue实例是Vue应用的根，它包含了数据、方法、生命周期钩子等。",
                syntax: "const app = Vue.createApp({ /* 选项 */ })",
                example: `// 创建Vue应用
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  },
  mounted() {
    console.log('Vue实例已挂载')
  }
})

// 挂载到DOM元素
const vm = app.mount('#app')`,
                preview: `<div id="vue-instance-preview">
  <p>{{ message }}</p>
  <button @click="reverseMessage">反转消息</button>
</div>

<script>
Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  },
  mounted() {
    console.log('Vue实例已挂载')
  }
}).mount('#vue-instance-preview')
<\/script>`,
                practice: `// 创建一个Vue应用，包含一个计数器
// data中定义count，初始值为0
// 添加一个方法increment，使count增加1
// 添加一个方法decrement，使count减少1`,
                answer: `// 创建一个Vue应用，包含一个计数器
const app = Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
})

// 挂载到DOM
app.mount('#app')`,
                answerExplanation: "这个例子展示了Vue实例的基本结构。我们创建了一个Vue应用，定义了一个数据属性count和两个方法increment和decrement。当调用这些方法时，count的值会相应变化。",
                difficulty: "beginner",
                tags: ["基础", "实例", "方法"]
            },
            {
                name: "模板语法",
                description: "Vue使用基于HTML的模板语法，允许开发者声明式地将DOM绑定至底层Vue实例的数据。所有Vue模板都是合法的HTML，可以被符合规范的浏览器和HTML解析器解析。",
                syntax: "{{ expression }}",
                example: `<!-- 文本插值 -->
<p>{{ message }}</p>

<!-- 原始HTML -->
<p v-html="rawHtml"></p>

<!-- 属性绑定 -->
<div v-bind:id="dynamicId"></div>

<!-- 简写 -->
<div :id="dynamicId"></div>

<!-- JavaScript表达式 -->
<p>{{ number + 1 }}</p>
<p>{{ ok ? 'YES' : 'NO' }}</p>
<p>{{ message.split('').reverse().join('') }}</p>`,
                preview: `<div id="template-preview">
  <p>消息: {{ message }}</p>
  <p>原始HTML: <span v-html="rawHtml"></span></p>
  <p>属性绑定: <span :title="titleText">悬停查看标题</span></p>
  <p>表达式: {{ number + 1 }}</p>
  <p>三元表达式: {{ ok ? 'YES' : 'NO' }}</p>
  <p>方法调用: {{ message.split('').reverse().join('') }}</p>
</div>

<script>
Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      rawHtml: '<strong>加粗文本</strong>',
      titleText: '这是一个标题属性',
      number: 5,
      ok: true
    }
  }
}).mount('#template-preview')
<\/script>`,
                practice: `// 使用模板语法
// 显示一个变量username
// 使用v-html显示一个包含HTML的变量
// 使用属性绑定设置一个元素的class
// 使用JavaScript表达式显示当前年份`,
                answer: `<div id="app">
  <!-- 文本插值 -->
  <p>用户名: {{ username }}</p>
  
  <!-- 原始HTML -->
  <p v-html="htmlContent"></p>
  
  <!-- 属性绑定 -->
  <div :class="className">这个div有动态类名</div>
  
  <!-- JavaScript表达式 -->
  <p>当前年份: {{ new Date().getFullYear() }}</p>
</div>

<script>
Vue.createApp({
  data() {
    return {
      username: '张三',
      htmlContent: '<em>斜体文本</em>',
      className: 'highlight'
    }
  }
}).mount('#app')
<\/script>

<style>
.highlight {
  background-color: yellow;
  padding: 10px;
}
</style>`,
                answerExplanation: "这个例子展示了Vue模板语法的四种常见用法：文本插值({{ }})、原始HTML渲染(v-html)、属性绑定(:或v-bind)和JavaScript表达式。注意使用v-html时要小心XSS攻击风险。",
                difficulty: "beginner",
                tags: ["模板", "插值", "绑定"]
            },
            {
                name: "计算属性",
                description: "计算属性是基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时才会重新求值。这使得计算属性非常适合处理复杂逻辑和性能优化。",
                syntax: `computed: {
  propertyName() {
    // 返回计算后的值
  }
}`,
                example: `const app = Vue.createApp({
  data() {
    return {
      firstName: '张',
      lastName: '三',
      price: 10,
      quantity: 2
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    reversedName() {
      return this.fullName.split('').reverse().join('')
    },
    total() {
      return this.price * this.quantity
    }
  }
})`,
                preview: `<div id="computed-preview">
  <p>名字: <input v-model="firstName"></p>
  <p>姓氏: <input v-model="lastName"></p>
  <p>全名: {{ fullName }}</p>
  <p>反转全名: {{ reversedName }}</p>
  
  <p>单价: <input v-model="price" type="number"></p>
  <p>数量: <input v-model="quantity" type="number"></p>
  <p>总价: {{ total }}</p>
</div>

<script>
Vue.createApp({
  data() {
    return {
      firstName: '张',
      lastName: '三',
      price: 10,
      quantity: 2
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    reversedName() {
      return this.fullName.split('').reverse().join('')
    },
    total() {
      return this.price * this.quantity
    }
  }
}).mount('#computed-preview')
<\/script>`,
                practice: `// 创建计算属性
// 定义两个数据属性price和quantity
// 创建一个计算属性total，返回price * quantity
// 创建一个计算属性discountedTotal，返回total的90%
// 创建一个计算属性canBuy，当discountedTotal大于50时返回true，否则返回false`,
                answer: `<div id="app">
  <p>单价: <input v-model="price" type="number"></p>
  <p>数量: <input v-model="quantity" type="number"></p>
  <p>总价: {{ total }}</p>
  <p>折扣价: {{ discountedTotal }}</p>
  <p>是否可以购买: {{ canBuy ? '是' : '否' }}</p>
</div>

<script>
Vue.createApp({
  data() {
    return {
      price: 10,
      quantity: 2
    }
  },
  computed: {
    total() {
      return this.price * this.quantity
    },
    discountedTotal() {
      return this.total * 0.9
    },
    canBuy() {
      return this.discountedTotal > 50
    }
  }
}).mount('#app')
<\/script>`,
                answerExplanation: "计算属性total、discountedTotal和canBuy会根据price和quantity的变化自动重新计算。与使用方法不同，计算属性会缓存结果，只有依赖项变化时才会重新计算，这提高了性能。",
                difficulty: "beginner",
                tags: ["计算属性", "响应式", "缓存"]
            },
            {
                name: "侦听器",
                description: "侦听器用于观察和响应Vue实例上的数据变动。当需要在数据变化时执行异步或开销较大的操作时，侦听器是最有用的。",
                syntax: `watch: {
  propertyName(newVal, oldVal) {
    // 响应变化
  }
}`,
                example: `const app = Vue.createApp({
  data() {
    return {
      question: '',
      answer: '请提出问题...',
      user: {
        name: '张三',
        age: 25
      }
    }
  },
  watch: {
    // 简单侦听
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
    // 深度侦听
    user: {
      handler(newUser, oldUser) {
        console.log('用户信息已更新')
      },
      deep: true
    }
  },
  methods: {
    getAnswer() {
      this.answer = '思考中...'
      setTimeout(() => {
        this.answer = '这是答案'
      }, 1000)
    }
  }
})`,
                preview: `<div id="watch-preview">
  <p>
    问一个问题:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
  
  <p>用户名: <input v-model="user.name"></p>
  <p>年龄: <input v-model="user.age" type="number"></p>
</div>

<script>
Vue.createApp({
  data() {
    return {
      question: '',
      answer: '请提出问题...',
      user: {
        name: '张三',
        age: 25
      }
    }
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
    user: {
      handler(newUser, oldUser) {
        console.log('用户信息已更新')
      },
      deep: true
    }
  },
  methods: {
    getAnswer() {
      this.answer = '思考中...'
      setTimeout(() => {
        this.answer = '这是答案'
      }, 1000)
    }
  }
}).mount('#watch-preview')
<\/script>`,
                practice: `// 使用侦听器
// 定义一个数据属性searchQuery
// 侦听searchQuery的变化
// 当searchQuery变化时，模拟API调用（使用setTimeout）
// 将结果显示在answer属性中`,
                answer: `<div id="app">
  <p>搜索: <input v-model="searchQuery"></p>
  <p>结果: {{ answer }}</p>
</div>

<script>
Vue.createApp({
  data() {
    return {
      searchQuery: '',
      answer: '请输入搜索词'
    }
  },
  watch: {
    searchQuery(newQuery, oldQuery) {
      if (newQuery) {
        this.answer = '搜索中...'
        this.debouncedGetAnswer()
      } else {
        this.answer = '请输入搜索词'
      }
    }
  },
  created() {
    this.debouncedGetAnswer = this.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer() {
      // 模拟API调用
      setTimeout(() => {
        this.answer = \`关于 "\${this.searchQuery}" 的搜索结果\`
      }, 1000)
    },
    debounce(func, wait) {
      let timeout
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }
  }
}).mount('#app')
<\/script>`,
                answerExplanation: "这个例子展示了侦听器的基本用法。我们侦听searchQuery的变化，并使用防抖函数来避免频繁的API调用。当searchQuery变化时，我们会模拟一个API调用并更新answer。",
                difficulty: "intermediate",
                tags: ["侦听器", "异步", "防抖"]
            }
        ]
    },
    {
        category: "指令",
        topics: [
            {
                name: "条件渲染",
                description: "Vue提供了一套条件渲染的指令，用于根据条件显示或隐藏元素。v-if指令用于条件性地渲染一块内容，v-show指令用于条件性地显示一块内容。",
                syntax: `v-if / v-else-if / v-else
v-show`,
                example: `<!-- v-if 条件渲染 -->
<p v-if="type === 'A'">A</p>
<p v-else-if="type === 'B'">B</p>
<p v-else>C</p>

<!-- v-show 条件显示 -->
<h1 v-show="isVisible">Hello!</h1>

<!-- 在 <template> 元素上使用 v-if -->
<template v-if="ok">
  <h1>标题</h1>
  <p>段落 1</p>
  <p>段落 2</p>
</template>`,
                preview: `<div id="conditional-preview">
  <select v-model="type">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
  
  <p v-if="type === 'A'">这是A</p>
  <p v-else-if="type === 'B'">这是B</p>
  <p v-else>这是C</p>
  
  <button @click="toggleVisible">切换显示</button>
  <h1 v-show="isVisible">可见的标题</h1>
  
  <template v-if="ok">
    <h2>模板内容</h2>
    <p>这是模板中的段落1</p>
    <p>这是模板中的段落2</p>
  </template>
</div>

<script>
Vue.createApp({
  data() {
    return {
      type: 'A',
      isVisible: true,
      ok: true
    }
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible
    }
  }
}).mount('#conditional-preview')
<\/script>`,
                practice: `// 使用条件渲染
// 根据score的值显示不同的消息
// 如果score >= 90，显示"优秀"
// 如果score >= 70，显示"良好"
// 如果score >= 60，显示"及格"
// 否则显示"不及格"
// 添加一个按钮切换显示/隐藏详细信息`,
                answer: `<div id="app">
  <p>分数: <input v-model="score" type="number"></p>
  
  <p v-if="score >= 90">优秀</p>
  <p v-else-if="score >= 70">良好</p>
  <p v-else-if="score >= 60">及格</p>
  <p v-else>不及格</p>
  
  <button @click="showDetails = !showDetails">
    {{ showDetails ? '隐藏' : '显示' }}详细信息
  </button>
  
  <div v-show="showDetails">
    <p>详细信息:</p>
    <ul>
      <li>90分以上: 优秀</li>
      <li>70-89分: 良好</li>
      <li>60-69分: 及格</li>
      <li>60分以下: 不及格</li>
    </ul>
  </div>
</div>

<script>
Vue.createApp({
  data() {
    return {
      score: 85,
      showDetails: false
    }
  }
}).mount('#app')
<\/script>`,
                answerExplanation: "v-if和v-else指令用于条件渲染。当条件为真时，元素会被渲染到DOM中；为假时，会从DOM中移除。v-show只是通过CSS控制显示/隐藏，元素始终在DOM中。v-if有更高的切换开销，而v-show有更高的初始渲染开销。",
                difficulty: "beginner",
                tags: ["条件渲染", "v-if", "v-show"]
            },
            {
                name: "列表渲染",
                description: "使用v-for指令基于一个数组来渲染一个列表。v-for指令需要使用item in items形式的特殊语法，其中items是源数据数组，而item则是被迭代的数组元素的别名。",
                syntax: `v-for="item in items"
v-for="(item, index) in items"
v-for="(value, key, index) in object"`,
                example: `<!-- 数组渲染 -->
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>

<!-- 带索引的数组渲染 -->
<ul>
  <li v-for="(item, index) in items" :key="item.id">
    {{ index }} - {{ item.name }}
  </li>
</ul>

<!-- 对象渲染 -->
<ul>
  <li v-for="(value, key, index) in object">
    {{ index }}. {{ key }}: {{ value }}
  </li>
</ul>

<!-- 值范围 -->
<div>
  <span v-for="n in 10" :key="n">{{ n }} </span>
</div>`,
                preview: `<div id="list-preview">
  <h3>数组渲染</h3>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }} - {{ item.price }}元
    </li>
  </ul>
  
  <h3>带索引的数组渲染</h3>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      {{ index }} - {{ item.name }} - {{ item.price }}元
    </li>
  </ul>
  
  <h3>对象渲染</h3>
  <ul>
    <li v-for="(value, key, index) in user">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
  
  <h3>值范围</h3>
  <div>
    <span v-for="n in 5" :key="n">{{ n }} </span>
  </div>
</div>

<script>
Vue.createApp({
  data() {
    return {
      items: [
        { id: 1, name: '苹果', price: 5 },
        { id: 2, name: '香蕉', price: 3 },
        { id: 3, name: '橙子', price: 4 }
      ],
      user: {
        name: '张三',
        age: 25,
        city: '北京'
      }
    }
  }
}).mount('#list-preview')
<\/script>`,
                practice: `// 使用列表渲染
// 创建一个数组fruits，包含几种水果
// 使用v-for渲染一个水果列表，显示名称和价格
// 添加一个计算属性sortedFruits，返回按价格排序的水果
// 使用v-for渲染排序后的水果列表`,
                answer: `<div id="app">
  <h3>水果列表</h3>
  <ul>
    <li v-for="fruit in fruits" :key="fruit.id">
      {{ fruit.name }} - 价格: {{ fruit.price }}元
    </li>
  </ul>
  
  <h3>按价格排序的水果列表</h3>
  <ul>
    <li v-for="fruit in sortedFruits" :key="fruit.id">
      {{ fruit.name }} - 价格: {{ fruit.price }}元
    </li>
  </ul>
</div>

<script>
Vue.createApp({
  data() {
    return {
      fruits: [
        { id: 1, name: '苹果', price: 5 },
        { id: 2, name: '香蕉', price: 3 },
        { id: 3, name: '橙子', price: 4 },
        { id: 4, name: '葡萄', price: 6 },
        { id: 5, name: '西瓜', price: 8 }
      ]
    }
  },
  computed: {
    sortedFruits() {
      return [...this.fruits].sort((a, b) => a.price - b.price)
    }
  }
}).mount('#app')
<\/script>`,
                answerExplanation: "v-for指令用于渲染列表。注意要使用:key属性提供唯一的标识符，这有助于Vue跟踪每个节点的身份，提高渲染性能。当使用计算属性返回排序后的数组时，我们使用扩展运算符创建原数组的副本，避免直接修改原数组。",
                difficulty: "beginner",
                tags: ["列表渲染", "v-for", "key"]
            },
            {
                name: "事件处理",
                description: "使用v-on指令监听DOM事件，并在触发时运行一些JavaScript代码。v-on指令可以接收一个需要调用的方法名称，也可以使用内联JavaScript语句。",
                syntax: `v-on:click="methodName"
@click="methodName"
@click="methodName($event)"
@click="handler('param', $event)"`,
                example: `<!-- 方法事件处理器 -->
<button v-on:click="greet">Greet</button>

<!-- 内联处理器 -->
<button @click="say('hi')">Say hi</button>

<!-- 事件修饰符 -->
<form @submit.prevent="onSubmit">...</form>

<!-- 按键修饰符 -->
<input @keyup.enter="submit">

<!-- 系统修饰符 -->
<button @click.ctrl="doSomething">Do something</button>`,
                preview: `<div id="event-preview">
  <p>计数: {{ count }}</p>
  <button @click="increment">增加</button>
  <button @click="decrement">减少</button>
  <button @click="reset">重置</button>
  
  <p>消息: {{ message }}</p>
  <input v-model="inputMessage">
  <button @click="updateMessage">更新消息</button>
  
  <div class="box" @click.self="boxClick">
    点击这个框 (带.self修饰符)
    <button @click="buttonClick">内部按钮</button>
  </div>
  
  <p>按键事件:</p>
  <input @keyup.enter="enterPressed" placeholder="按回车键">
  
  <form @submit.prevent="formSubmit">
    <input v-model="formData">
    <button type="submit">提交</button>
  </form>
</div>

<script>
Vue.createApp({
  data() {
    return {
      count: 0,
      message: '初始消息',
      inputMessage: '',
      formData: ''
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    updateMessage() {
      this.message = this.inputMessage
    },
    boxClick() {
      alert('点击了盒子')
    },
    buttonClick() {
      alert('点击了按钮')
    },
    enterPressed() {
      alert('按下了回车键')
    },
    formSubmit() {
      alert('表单已提交: ' + this.formData)
    }
  }
}).mount('#event-preview')
<\/script>

<style>
.box {
  border: 2px solid #42b883;
  padding: 20px;
  margin-top: 10px;
  cursor: pointer;
}
</style>`,
                practice: `// 处理事件
// 创建一个计数器
// 添加两个按钮，一个增加计数，一个减少计数
// 添加一个输入框，当按下回车键时，将输入框的值添加到列表中
// 添加一个按钮，点击时清空列表`,
                answer: `<div id="app">
  <p>计数: {{ count }}</p>
  <button @click="increment">增加</button>
  <button @click="decrement">减少</button>
  
  <p>添加项目:</p>
  <input v-model="newItem" @keyup.enter="addItem">
  <button @click="addItem">添加</button>
  
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
      <button @click="removeItem(index)">删除</button>
    </li>
  </ul>
  
  <button @click="clearItems">清空列表</button>
</div>

<script>
Vue.createApp({
  data() {
    return {
      count: 0,
      newItem: '',
      items: []
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem)
        this.newItem = ''
      }
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    clearItems() {
      this.items = []
    }
  }
}).mount('#app')
<\/script>`,
                answerExplanation: "这个例子展示了多种事件处理方式。我们使用了@click处理按钮点击事件，@keyup.enter处理按键事件，并在方法中操作数据。注意在添加项目时，我们检查了输入是否为空，避免添加空项目。",
                difficulty: "beginner",
                tags: ["事件处理", "v-on", "修饰符"]
            }
        ]
    },
    {
        category: "表单处理",
        topics: [
            {
                name: "表单输入绑定",
                description: "使用v-model指令在表单输入和应用状态之间创建双向数据绑定。v-model指令会根据控件类型自动选取正确的方法来更新元素。",
                syntax: `v-model="dataProperty"`,
                example: `<!-- 文本 -->
<input v-model="message" placeholder="编辑我">

<!-- 多行文本 -->
<textarea v-model="message"></textarea>

<!-- 复选框 -->
<input type="checkbox" v-model="checked">

<!-- 多个复选框 -->
<input type="checkbox" value="Jack" v-model="checkedNames">
<input type="checkbox" value="John" v-model="checkedNames">

<!-- 单选按钮 -->
<input type="radio" value="One" v-model="picked">

<!-- 选择框 -->
<select v-model="selected">
  <option disabled value="">请选择</option>
  <option>A</option>
  <option>B</option>
</select>

<!-- 多选框 -->
<select v-model="multipleSelected" multiple>
  <option>A</option>
  <option>B</option>
</select>`,
                preview: `<div id="form-preview">
  <h3>文本输入</h3>
  <input v-model="text" placeholder="输入文本">
  <p>输入的内容: {{ text }}</p>
  
  <h3>多行文本</h3>
  <textarea v-model="multilineText"></textarea>
  <p style="white-space: pre-line;">多行文本: {{ multilineText }}</p>
  
  <h3>复选框</h3>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked ? '已选中' : '未选中' }}</label>
  
  <h3>多个复选框</h3>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <p>选中的名字: {{ checkedNames }}</p>
  
  <h3>单选按钮</h3>
  <input type="radio" id="one" value="选项一" v-model="picked">
  <label for="one">选项一</label>
  <input type="radio" id="two" value="选项二" v-model="picked">
  <label for="two">选项二</label>
  <p>选中的是: {{ picked }}</p>
  
  <h3>选择框</h3>
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>选项A</option>
    <option>选项B</option>
    <option>选项C</option>
  </select>
  <p>选中的是: {{ selected }}</p>
  
  <h3>多选框</h3>
  <select v-model="multipleSelected" multiple>
    <option>选项A</option>
    <option>选项B</option>
    <option>选项C</option>
  </select>
  <p>选中的是: {{ multipleSelected }}</p>
</div>

<script>
Vue.createApp({
  data() {
    return {
      text: '',
      multilineText: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      multipleSelected: []
    }
  }
}).mount('#form-preview')
<\/script>`,
                practice: `// 使用表单输入绑定
// 创建一个用户注册表单
// 包含用户名、邮箱、密码和确认密码字段
// 添加一个选择框选择用户角色（用户、管理员、超级管理员）
// 添加一个复选框同意条款
// 实时显示用户输入的内容`,
                answer: `<div id="app">
  <h3>用户注册</h3>
  <form @submit.prevent="submitForm">
    <div>
      <label>用户名:</label>
      <input v-model="form.username" placeholder="请输入用户名">
    </div>
    
    <div>
      <label>邮箱:</label>
      <input v-model="form.email" type="email" placeholder="请输入邮箱">
    </div>
    
    <div>
      <label>密码:</label>
      <input v-model="form.password" type="password" placeholder="请输入密码">
    </div>
    
    <div>
      <label>确认密码:</label>
      <input v-model="form.confirmPassword" type="password" placeholder="请确认密码">
    </div>
    
    <div>
      <label>角色:</label>
      <select v-model="form.role">
        <option value="user">用户</option>
        <option value="admin">管理员</option>
        <option value="superadmin">超级管理员</option>
      </select>
    </div>
    
    <div>
      <input type="checkbox" id="agree" v-model="form.agree">
      <label for="agree">我同意条款</label>
    </div>
    
    <button type="submit" :disabled="!formValid">注册</button>
  </form>
  
  <h3>表单数据:</h3>
  <pre>{{ formData }}</pre>
</div>

<script>
Vue.createApp({
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        agree: false
      }
    }
  },
  computed: {
    formData() {
      return JSON.stringify(this.form, null, 2)
    },
    formValid() {
      return this.form.username && 
             this.form.email && 
             this.form.password && 
             this.form.password === this.form.confirmPassword &&
             this.form.agree
    }
  },
  methods: {
    submitForm() {
      alert('表单已提交: ' + JSON.stringify(this.form))
    }
  }
}).mount('#app')
<\/script>`,
                answerExplanation: "这个例子展示了各种表单输入绑定的用法。我们使用了v-model绑定各种表单元素，并使用计算属性formValid来验证表单是否有效。注意在提交表单时，我们使用了@submit.prevent来阻止默认的表单提交行为。",
                difficulty: "beginner",
                tags: ["表单", "v-model", "双向绑定"]
            }
        ]
    },
    {
        category: "组件",
        topics: [
            {
                name: "组件基础",
                description: "组件是Vue最强大的功能之一，它们可以帮助你扩展基本的HTML元素，封装可重用的代码。组件系统让我们可以用独立可复用的小组件来构建大型应用。",
                syntax: `// 定义组件
app.component('component-name', {
  // 选项
})

// 使用组件
<component-name></component-name>`,
                example: `// 定义一个按钮组件
app.component('my-button', {
  template: \`
    <button @click="count++" class="custom-btn">
      你点击了我 {{ count }} 次
    </button>
  \`,
  data() {
    return {
      count: 0
    }
  }
})

// 使用组件
<my-button></my-button>
<my-button></my-button>`,
                preview: `<div id="component-preview">
  <h3>自定义按钮组件</h3>
  <my-button></my-button>
  <my-button></my-button>
  
  <h3>待办事项组件</h3>
  <todo-list></todo-list>
</div>

<script>
const app = Vue.createApp({})

// 定义按钮组件
app.component('my-button', {
  template: \`
    <button @click="count++" class="custom-btn">
      你点击了我 {{ count }} 次
    </button>
  \`,
  data() {
    return {
      count: 0
    }
  }
})

// 定义待办事项组件
app.component('todo-list', {
  template: \`
    <div>
      <h4>待办事项 ({{ todos.length }})</h4>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="添加新任务">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span :class="{ completed: todo.completed }">
            {{ todo.text }}
          </span>
          <button @click="toggleTodo(index)">{{ todo.completed ? '未完成' : '完成' }}</button>
          <button @click="removeTodo(index)">删除</button>
        </li>
      </ul>
    </div>
  \`,
  data() {
    return {
      newTodo: '',
      todos: [
        { text: '学习Vue', completed: false },
        { text: '完成项目', completed: true },
        { text: '阅读文档', completed: false }
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      }
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
})

app.mount('#component-preview')
<\/script>

<style>
.custom-btn {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>`,
                practice: `// 创建一个简单的组件
// 组件名为"user-card"
// 显示用户的名字、年龄和城市
// 添加一个按钮切换显示/隐藏详细信息
// 在模板中使用这个组件两次，显示不同的用户`,
                answer: `<div id="app">
  <user-card 
    name="张三" 
    age="25" 
    city="北京"
    :show-details="true">
  </user-card>
  
  <user-card 
    name="李四" 
    age="30" 
    city="上海">
  </user-card>
</div>

<script>
const app = Vue.createApp({})

// 定义用户卡片组件
app.component('user-card', {
  template: \`
    <div class="user-card">
      <h3>{{ name }}</h3>
      <button @click="toggleDetails">
        {{ showDetails ? '隐藏' : '显示' }}详细信息
      </button>
      
      <div v-if="showDetails">
        <p>年龄: {{ age }}</p>
        <p>城市: {{ city }}</p>
      </div>
    </div>
  \`,
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: [String, Number],
      default: '未知'
    },
    city: {
      type: String,
      default: '未知'
    },
    showDetails: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localShowDetails: this.showDetails
    }
  },
  methods: {
    toggleDetails() {
      this.localShowDetails = !this.localShowDetails
    }
  }
})

app.mount('#app')
<\/script>

<style>
.user-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
  background-color: #f9f9f9;
}
</style>`,
                answerExplanation: "这个例子展示了组件的基本用法。我们创建了一个可复用的user-card组件，通过props接收外部数据。组件有自己的内部状态(localShowDetails)和方法(toggleDetails)。注意我们使用了v-if条件渲染来控制详细信息的显示。",
                difficulty: "beginner",
                tags: ["组件", "props", "复用"]
            }
        ]
    }
];

// 由于代码长度限制，这里只展示了部分主题数据
// 完整的主题数据包括：组件通信、生命周期、自定义指令、过渡动画、路由、状态管理等

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 生成分类和主题列表
    const categoriesContainer = document.querySelector('.categories');
    vueTopics.forEach(categoryData => {
        const categoryElement = document.createElement('li');
        categoryElement.className = 'category';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = `
            ${categoryData.category}
            <span>▼</span>
        `;
        
        const topicsList = document.createElement('ul');
        topicsList.className = 'topics';
        
        categoryData.topics.forEach(topic => {
            const topicItem = document.createElement('li');
            topicItem.className = 'topic-item';
            
            // 添加难度标签
            const difficultyClass = `difficulty-${topic.difficulty || 'beginner'}`;
            const difficultyText = topic.difficulty === 'intermediate' ? '中级' : 
                                 topic.difficulty === 'advanced' ? '高级' : '初级';
            
            topicItem.innerHTML = `
                <span class="topic-icon">📚</span>
                ${topic.name}
                <span class="difficulty ${difficultyClass}">${difficultyText}</span>
            `;
            
            topicItem.dataset.category = categoryData.category;
            topicItem.dataset.topic = topic.name;
            
            topicItem.addEventListener('click', function() {
                // 移除其他活跃状态
                document.querySelectorAll('.topic-item.active').forEach(item => {
                    item.classList.remove('active');
                });
                
                // 设置当前活跃状态
                this.classList.add('active');
                
                // 显示主题详情
                displayTopicDetails(topic);
                
                // 更新进度
                updateProgress();
            });
            
            topicsList.appendChild(topicItem);
        });
        
        categoryTitle.addEventListener('click', function() {
            topicsList.classList.toggle('active');
            this.querySelector('span').textContent = 
                topicsList.classList.contains('active') ? '▲' : '▼';
        });
        
        categoryElement.appendChild(categoryTitle);
        categoryElement.appendChild(topicsList);
        categoriesContainer.appendChild(categoryElement);
    });
    
    // 搜索功能
    document.getElementById('search-input').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll('.topic-item').forEach(item => {
            const topicName = item.textContent.toLowerCase();
            if (topicName.includes(searchTerm)) {
                item.style.display = 'flex';
                // 展开父类别
                item.closest('.topics').classList.add('active');
                item.closest('.category').querySelector('.category-title span').textContent = '▲';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // 运行代码按钮事件
    document.querySelector('.run-btn').addEventListener('click', function() {
        runCode();
    });
    
    // 重置按钮事件
    document.querySelector('.reset-btn').addEventListener('click', function() {
        resetCode();
    });
    
    // 查看答案按钮事件
    document.querySelector('.answer-btn').addEventListener('click', function() {
        showAnswer();
    });
    
    // 模态框关闭按钮事件
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('answer-modal').classList.remove('active');
    });
    
    // 点击模态框外部关闭
    document.getElementById('answer-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    // 复制答案按钮事件
    document.getElementById('copy-answer').addEventListener('click', function() {
        copyAnswerToClipboard();
    });
    
    // 重新开始学习按钮
    document.querySelector('.restart-btn').addEventListener('click', function() {
        if (confirm('确定要重新开始学习吗？这将清除您的学习进度。')) {
            localStorage.clear();
            location.reload();
        }
    });
});

// 显示主题详情
function displayTopicDetails(topic) {
    document.querySelector('.topic-title').textContent = topic.name;
    document.querySelector('.explanation').innerHTML = `
        <h3>说明</h3>
        <p>${topic.description}</p>
        <div class="syntax">${topic.syntax}</div>
        
        ${topic.tags ? `
        <div class="tags">
            ${topic.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ` : ''}
    `;
    
    document.querySelector('.examples').innerHTML = `
        <h3>示例</h3>
        <div class="example-code">${topic.example}</div>
    `;
    
    // 显示预览
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = `
        <h3>实时预览</h3>
        <div class="preview-area">${topic.preview}</div>
    `;
    
    // 执行预览中的脚本
    const scripts = previewContainer.querySelectorAll('script');
    scripts.forEach(script => {
        if (script.textContent) {
            // 创建一个新的script元素来执行
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript);
            document.body.removeChild(newScript);
        }
    });
    
    document.querySelector('.code-editor').value = topic.practice;
    document.querySelector('.output').innerHTML = '<p>运行结果将显示在这里...</p>';
    
    // 标记为已学习
    if (!topic.learned) {
        topic.learned = true;
        localStorage.setItem(topic.name, 'learned');
    }
}

// 更新进度
function updateProgress() {
    let learnedCount = 0;
    let totalCount = 0;
    
    vueTopics.forEach(category => {
        category.topics.forEach(topic => {
            totalCount++;
            if (topic.learned || localStorage.getItem(topic.name) === 'learned') {
                learnedCount++;
            }
        });
    });
    
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const percentage = (learnedCount / totalCount) * 100;
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${learnedCount}/${totalCount}`;
    
    // 如果全部学完，显示完成消息
    if (learnedCount === totalCount) {
        document.querySelector('.completion-message').style.display = 'block';
    } else {
        document.querySelector('.completion-message').style.display = 'none';
    }
}

// 运行代码
function runCode() {
    const code = document.querySelector('.code-editor').value;
    const output = document.querySelector('.output');
    
    try {
        // 创建一个函数来执行代码并捕获输出
        let result = '';
        const originalLog = console.log;
        console.log = function(...args) {
            result += args.join(' ') + '\n';
            originalLog.apply(console, args);
        };
        
        // 执行代码
        eval(code);
        
        // 恢复原始的console.log
        console.log = originalLog;
        
        // 显示结果
        output.innerHTML = `<pre>${result || '代码已执行，但没有输出。'}</pre>`;
    } catch (error) {
        output.innerHTML = `<pre style="color: var(--danger)">错误: ${error.message}</pre>`;
    }
}

// 重置代码
function resetCode() {
    const activeTopic = document.querySelector('.topic-item.active');
    if (activeTopic) {
        const topicName = activeTopic.dataset.topic;
        const categoryName = activeTopic.dataset.category;
        
        // 找到对应的主题数据
        let topicData;
        vueTopics.forEach(category => {
            if (category.category === categoryName) {
                category.topics.forEach(topic => {
                    if (topic.name === topicName) {
                        topicData = topic;
                    }
                });
            }
        });
        
        if (topicData) {
            document.querySelector('.code-editor').value = topicData.practice;
            document.querySelector('.output').innerHTML = '<p>运行结果将显示在这里...</p>';
        }
    }
}

// 显示答案
function showAnswer() {
    const activeTopic = document.querySelector('.topic-item.active');
    if (activeTopic) {
        const topicName = activeTopic.dataset.topic;
        const categoryName = activeTopic.dataset.category;
        
        // 找到对应的主题数据
        let topicData;
        vueTopics.forEach(category => {
            if (category.category === categoryName) {
                category.topics.forEach(topic => {
                    if (topic.name === topicName) {
                        topicData = topic;
                    }
                });
            }
        });
        
        if (topicData && topicData.answer) {
            // 显示答案模态框
            document.getElementById('answer-code').textContent = topicData.answer;
            document.getElementById('answer-explanation').innerHTML = 
                `<h4>解析:</h4><p>${topicData.answerExplanation || '暂无详细解析。'}</p>`;
            document.getElementById('answer-modal').classList.add('active');
        } else {
            alert('此题目暂无参考答案。');
        }
    } else {
        alert('请先选择一个学习主题。');
    }
}

// 复制答案到剪贴板
function copyAnswerToClipboard() {
    const answerCode = document.getElementById('answer-code').textContent;
    navigator.clipboard.writeText(answerCode).then(() => {
        alert('代码已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败: ', err);
        alert('复制失败，请手动复制代码。');
    });
}

// 初始化进度
document.addEventListener('DOMContentLoaded', function() {
    // 检查本地存储中的学习状态
    vueTopics.forEach(category => {
        category.topics.forEach(topic => {
            if (localStorage.getItem(topic.name) === 'learned') {
                topic.learned = true;
            }
        });
    });
    
    updateProgress();
});