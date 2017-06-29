<template>
    <div class="sweet-contact__form">
        <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
                <mu-text-field label="姓名" hintText="请输入姓名" icon="perm_identity"
                :errorText="computederrName"
                v-model="sendForm.name" fullWidth labelFloat ref="sendName" class="sweet-contact__item sweet-contact__name"></mu-text-field>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
                <mu-text-field label="电话/微信/邮箱" hintText="请输入电话/微信/邮箱"
                :errorText="computederrContact"
                v-model="sendForm.contact" icon="mail" fullWidth labelFloat ref="sendContact" class="sweet-contact__item sweet-contact__contact"></mu-text-field>
            </mu-col>
        </mu-row>
        <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="100">
                <mu-text-field multiLine  :rows="5" label="留言内容" hintText="留言内容"
                :errorText="computedContent"
                v-model="sendForm.content" icon="send" labelFloat fullWidth ref="sendContent"  class="sweet-contact__item sweet-contact__content"></mu-text-field>
            </mu-col>
        </mu-row>
        <mu-row gutter class="sweet-contact__btn">
            <mu-col width="100" tablet="50" desktop="33">
                <mu-raised-button class="sweet-contact__item" label="提交" primary fullWidth @click="submitHandle"></mu-raised-button>
            </mu-col>
        </mu-row>
    </div>
</template>
<script>
    import '@/utils'
    import {TweenMax, Power4} from 'gsap'
    export default {
      data () {
        return {
          sendForm: {
            name: '',
            contact: '',
            content: ''
          }
        }
      },
      computed: {
        computederrName () {
          const {name} = this.sendForm
          return name ? '' : '请输入姓名'
        },
        computederrContact () {
          const {contact} = this.sendForm
          return contact ? '' : '请输入联系方式'
        },
        computedContent () {
          const {content} = this.sendForm
          return content ? '' : '请输入内容'
        }
      },
      methods: {
        submitHandle () {
          const {name, contact, content} = this.sendForm
          if (name && contact && content) {
            console.log('submit success !!!!')
            this.$emit('submit', this.sendForm)
          }
        },
        tweenEaseOut (tween) {
          tween.staggerTo('.sweet-contact__item', 1.2, {
            x: 0,
            opacity: 1,
            ease: Power4.easeOut
          }, 0.5)
        }
      },
      mounted () {
        TweenMax.set('.sweet-contact__item', {
          opacity: 0,
          x: -600
        })
        /*
        window.addEventListener('scroll', () => {
          console.log(document.body.scrollTop)
          if (document.body.clientWidth > 960) {
            if (document.body.scrollTop > 3000) {
              this.tweenEaseOut(TweenMax)
            }
          } else if (document.body.clientWidth <= 960 && document.body.clientWidth > 582) {
            if (document.body.scrollTop > 3500) {
              this.tweenEaseOut(TweenMax)
            }
          } else if (document.body.clientWidth < 582) {
            this.tweenEaseOut(TweenMax)
          }
        }, false)
        */
      }
    }
</script>
<style lang="" scoped>
    .sweet-contact__form {
        padding: 2rem;
    }
    .sweet-contact__userIcon {
        color: #7e57c2;
    }
    .sweet-contact__btn{
        padding-top:1.5rem;
        padding-left:4rem;
    }
    .sweet-contact__name{
        opacity: 0;
    }
    .sweet-contact__contact{
      opacity: 0;
    }
    .sweet-contact__content{
      opacity: 0;
    }
</style>
