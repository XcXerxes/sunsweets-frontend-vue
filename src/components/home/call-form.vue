<template>
    <div class="sweet-contact__form">
        <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
                <mu-text-field label="姓名" hintText="请输入姓名" icon="perm_identity"
                :errorText="computederrName"
                v-model="sendForm.name" fullWidth labelFloat ref="sendName" class="sweet-contact__name"></mu-text-field>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
                <mu-text-field label="电话/微信/邮箱" hintText="请输入电话/微信/邮箱"
                :errorText="computederrContact"
                v-model="sendForm.contact" icon="mail" fullWidth labelFloat ref="sendContact" class="sweet-contact__contact"></mu-text-field>
            </mu-col>
        </mu-row>
        <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="100">
                <mu-text-field multiLine  :rows="5" label="留言内容" hintText="留言内容"
                :errorText="computedContent"
                v-model="sendForm.content" icon="send" labelFloat fullWidth ref="sendContent"  class="sweet-contact__content"></mu-text-field>
            </mu-col>
        </mu-row>
        <mu-row gutter class="sweet-contact__btn">
            <mu-col width="100" tablet="50" desktop="33">
                <mu-raised-button label="提交" primary fullWidth @click="submitHandle"></mu-raised-button>
            </mu-col>
        </mu-row>
    </div>
</template>
<script>
    import '@/utils'
    import {TweenLite, Power4} from 'gsap'
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
        tweenEaseOut () {
          TweenLite.to(this.$refs.sendName.$el, 1.6, { opacity: 1, transform: 'translateX(0)', ease: Power4.easeOut })
          TweenLite.to(this.$refs.sendContact.$el, 2, { opacity: 1, transform: 'translateX(0)', ease: Power4.easeOut })
          TweenLite.to(this.$refs.sendContent.$el, 2.4, { opacity: 1, transform: 'translateX(0)', ease: Power4.easeOut })
        },
        tweenEaseIn () {
          TweenLite.to(this.$refs.sendName.$el, 1, { opacity: 0, transform: 'translateX(-600px)', ease: Power4.easeIn })
          TweenLite.to(this.$refs.sendContact.$el, 0.8, { opacity: 0, transform: 'translateX(800px)', ease: Power4.easeIn })
          TweenLite.to(this.$refs.sendContent.$el, 1.2, { opacity: 0, transform: 'translateX(800px)', ease: Power4.easeIn })
        }
      },
      mounted () {
        window.addEventListener('scroll', () => {
          console.log(document.body.scrollTop)
          /*
          if (document.body.clientWidth > 960) {
            if (document.body.scrollTop > 1200 && document.body.scrollTop < 1550) {
              this.tweenEaseOut()
            } else {
              this.tweenEaseIn()
            }
          } else if (document.body.clientWidth <= 960 && document.body.clientWidth > 582) {
            if (document.body.scrollTop > 1500 && document.body.scrollTop < 1800) {
              this.tweenEaseOut()
            } else {
              this.tweenEaseIn()
            }
          } else {
            if (document.body.scrollTop > 2000 && document.body.scrollTop < 2700) {
              this.tweenEaseOut()
            } else {
              this.tweenEaseIn()
            }
          }
          */
        }, false)
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
        transform: translateX(-600px);
        opacity: 0;
    }
    .sweet-contact__contact{
      transform: translateX(800px);
      opacity: 0;
    }
    .sweet-contact__content{
      transform: translateX(800px);
      opacity: 0;
    }
</style>
