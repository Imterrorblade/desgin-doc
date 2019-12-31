# Color

## Status Color

<src-color-Color type="status" />

## Text Color

<src-color-Color type="text" />

## Fill Color

<src-color-Color type="fill" />

## Gradient Color
<src-color-Color type="gradient" />

## 基本用法

### 字体颜色
<common-Democode>
  <test-TextColorTest ></test-TextColorTest>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-color">
        <div>
          <span class="text__main">text__main</span>
          <span class="text__secondary">text__secondary</span>
          <span class="text__muted">text__muted</span>
          <span class="text__note">text__note</span>
          <span class="text__blue">text__blue</span>
          <span class="text__orange">text__orange</span>
          <span class="text__green">text__green</span>
          <span class="text__red">text__red</span>
          <span class="text__purple">text__purple</span>
        </div>
      </div>
    </template>
  </highlight-code>
</common-Democode>


### 背景颜色
<common-Democode>
  <test-BackgroundColorTest type="fill" ></test-BackgroundColorTest>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-color">
        <div class="demo-wrap">
          <div class="fill__blue"></div>
          <div class="fill__orange"></div>
          <div class="fill__green"></div>
          <div class="fill__red"></div>
          <div class="fill__purple"></div>
        </div>
      </div>
    </template>
  </highlight-code>
</common-Democode>


### 背景颜色
<common-Democode>
  <test-BackgroundColorTest type="gradient" ></test-BackgroundColorTest>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-color">
        <div class="demo-wrap">
          <div class="fill-gradient__black"></div>
          <div class="fill-gradient__green"></div>
        </div>
      </div>
    </template>
  </highlight-code>
</common-Democode>


