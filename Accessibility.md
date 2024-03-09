# Accessibility (ARIA)

> you can document
>  https://www.w3.org/TR/wai-aria-1.1/#state_prop_def
>  https://www.w3.org/TR/wai-aria-1.1/#role_definitions

## button

1. `aria-label`: 提供一个明确的标签，当文本内容不足以描述按钮的功能时非常有用。这个标签会被屏幕阅读器读出来，但在页面上不会显示。

   ```html
   <button aria-label="关闭">X</button>
   ```

2. `aria-labelledby`: 当你想要关联按钮和页面上其他元素的文本时使用，这个属性的值应该是另一个元素的ID。

   ```html
   <span id="saveLabel">保存文件</span>
   <button aria-labelledby="saveLabel"></button>
   ```

3. `aria-describedby`: 提供额外的描述信息，帮助用户更好地理解按钮的功能。

   ```html
   <button aria-describedby="descriptionSave">保存</button>
   <div id="descriptionSave">点击此按钮将保存您的文档</div>
   ```

4. `aria-disabled`: 指示按钮当前是否被禁用。虽然HTML本身有`disabled`属性，但`aria-disabled`可以提供更多的语义信息给辅助技术。

   ```html
   <button aria-disabled="true">不可用</button>
   ```

5. `aria-expanded`: 用于可展开的控件，如下拉菜单，指示当前展开状态。

   ```html
   <button aria-expanded="false">更多选项</button>
   ```

6. `aria-pressed`: 用于切换按钮，指示按钮的当前状态是按下还是释放。

   ```html
   <button aria-pressed="false">开/关</button>
   ```

7. `role`: 当使用非`<button>`元素模拟按钮时，需要添加`role="button"`来告诉辅助技术这是一个按钮。

   ```html
   <div role="button" tabindex="0">点击我</div>
   ```

8. `tabindex`: 控制元素的键盘焦点顺序。对于按钮来说，通常不需要设置，因为按钮默认可以获得焦点。但如果你在非标准元素上模拟按钮，可能需要设置`tabindex="0"`以确保它可以通过键盘导航。

   ```html
   <div role="button" tabindex="0">模拟按钮</div>
   ```

确保使用这些属性时，遵循最佳实践和标准，以便为所有用户提供一致和可预测的体验。这些属性的使用应当与你的网站或应用程序的具体需求相匹配。


## icon

图标的无障碍访问（Accessibility, A11y）属性主要是为了确保包括视障用户在内的所有人都能够理解和使用图标。以下是一些常用的无障碍属性，它们可以帮助屏幕阅读器等辅助技术更好地解释图标给用户：

1. `alt`（Alternative Text）属性：用于为图像提供文本替代，这样屏幕阅读器就可以读出这个描述，告诉用户图标的含义。

2. `aria-hidden`属性：如果图标仅为装饰性质，不提供额外信息，可以使用`aria-hidden="true"`隐藏图标，这样屏幕阅读器就会忽略它。

3. `aria-label`属性：提供对图标的简短描述，这个标签直接告诉辅助技术图标的功能或意义。

4. `aria-labelledby`属性：指向一个或多个元素的ID，这些元素包含了描述图标的文本。这对于链接或按钮中的图标特别有用。

5. `role`属性：特别是`role="img"`，表示元素是一个图像。结合`aria-label`或`aria-labelledby`使用，可以提供对图标的描述。

6. `title`属性：为图标提供附加的描述信息，当用户鼠标悬停时显示。

7. `focusable`属性（SVG特有）：当设置为`focusable="false"`时，可以防止SVG图标在Internet Explorer中获得焦点，从而改善键盘导航。

8. `tabindex`属性：控制元素是否可聚焦以及它们的聚焦顺序。对于可交互的图标（如按钮），确保它们可以通过键盘导航到达。

使用这些属性时，最重要的是确保图标的功能和意图对所有用户都是清晰的。无障碍设计不仅有助于残障用户，它也使得网站更加易用，从而为所有用户提供更好的体验。