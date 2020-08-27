<template>

    <div class="data-picker"
         v-click-outside
    >
        <div class="picker-input">
            <div class="input-prefix">
                <i class="iconfont icon-date"/>
            </div>
            <input type="text"
                   :value="chooseDate"
                   @focus="changePanel(true)"
                   @blur="changePanel(false)"
            >
        </div>
        <div class="picker-panel"
             v-if="showPanel"
        >
            <div class="picker-arrow"/>
            <div class="picker-body">
                <div class="picker-header">
                    <span class="picker-btn iconfont icon-prev-year"/>
                    <span class="picker-btn iconfont icon-prev-month"/>
                    <span class="picker-data">

                    </span>
                    <span class="picker-btn iconfont icon-next-month"/>
                    <span class="picker-btn iconfont icon-next-year"/>
                </div>
                <div class="picker-content">
                    <div class="picker-weeks">
                        <div
                                v-for="week in ['日', '一', '二', '三', '四', '五', '六']"
                                :key="week"
                        >{{ week }}
                        </div>
                    </div>
                    <div class="picker-days">
                        <div
                                v-for="date in 42"
                                :key="date"
                        >{{ date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

export default {

    name: "DatePicker",
    directives: {

        'click-outside': {

            bind(el) {

                document.onclick = function (e) {

                    const tar = e.target,
                        isElSon = el.contains(tar);

                    console.log(el, tar, isElSon);

                    // if (isElSon) {
                    //
                    //     this.changePanel();
                    // }
                };
            }
        }
    },
    props: {

        date: {
            type: Date,
            default: () => new Date()
        }
    },
    created() {

        console.log(this.date);
    },
    computed: {

        chooseDate() {

            const year = this.date.getFullYear(),
                month = this.date.getMonth(),
                day = this.date.getDate();

            return `${year} - ${month + 1} - ${day}`;
        }
    },
    data() {

        return {

            showPanel: false,
        };
    },
    methods: {

        changePanel(flag) {

            this.showPanel = flag;
        }
    }
}


</script>


<style>

@import "./assets/font.css";

.date-picker {
    display: inline-block;
}

.picker-input {
    position: relative;
}

.picker-input input {
    height: 40px;
    line-height: 40px;
    padding: 0 30px 0 36px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
}

.picker-input .input-prefix {
    position: absolute;
    left: 5px;
    width: 25px;
    height: 100%;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
}

.picker-panel {
    position: absolute;
    width: 322px;
    height: 329px;
    margin-top: 5px;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    background-color: #fff;
}

.picker-panel .picker-arrow {
    position: absolute;
    top: -12px;
    left: 30px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: #ebeef5;
}

.picker-panel .picker-arrow::after {
    position: absolute;
    left: -6px;
    top: 1px;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: #fff;
    border-top-width: 0;
}

.picker-panel .picker-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 10px;
}

.picker-panel .picker-btn {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 12px;
    color: #303133;
    cursor: pointer;
}

.picker-panel .picker-date {
    margin-left: 60px;
    margin-right: 60px;
    font-size: 14px;
    user-select: none;
}

.picker-panel .picker-content {
    padding: 0 10px 10px 10px;
    color: #606266;
    user-select: none;
}

.picker-panel .picker-weeks {
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ebeef5;
}

.picker-panel .picker-days {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.picker-panel .picker-days div {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 4px 6px;
    font-size: 12px;
    cursor: pointer;
}

.picker-panel .picker-days div:hover {
    color: #409eff;
}

.picker-panel .picker-days div.is-today {
    color: #409eff;
    font-weight: 700;
}

.picker-panel .picker-days div.is-select {
    border-radius: 50%;
    background-color: #409eff;
    color: #fff;
}

.picker-panel .picker-days div.other-month {
    color: #c0c4cc;
}


</style>










