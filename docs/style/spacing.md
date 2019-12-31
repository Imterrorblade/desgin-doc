# Spacing

为了配合常见的材料设计间距。可以使用以下格式{property}{direction}-{size}应用这些类



## property

用来设置间距的类型：

- `m` - 对应 `margin`
- `p` - 对应 `padding`



## direction

指定属性所应用到的方向：

- `t`- 对应 `top`
- `b` - 对应 `bottom`
- `l`- 对应 `left`
- `r` - 对应 `right`
- `x`- 对应 `top & bottom`
- `y` - 对应 `left & right`
- `a`- 对应 `top & right & bottom & left`



## size

> 从0到12可以根据自己的需求调整区间, 基础单位是4



- `1` - 设置 `margin` 或 `padding` 等于 4px
- `2` - 设置 `margin` 或则 `padding` 等于 8px
- `3` - 设置 `margin` 或则 `padding` 等于 12px
- `4` - 设置 `margin` 或则 `padding` 等于 16px
- `5` - 设置 `margin` 或则 `padding` 等于 20px
- `6` - 设置 `margin` 或则 `padding` 等于 24px
- `7` - 设置 `margin` 或则 `padding` 等于 28px

## Example

```html
<div class="pt-2"></div>
<div class="mb-2"></div>
<div class="mx-4"></div>
```
