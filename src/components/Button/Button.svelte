<style>
    button{
        width: auto;
        display: inline-block;
        border: solid 1px var(--primary-color);
        color: var(--primary-color);
        border-radius: 5px;
        padding: 10px;
        text-transform: uppercase;
        cursor: pointer;

    }
    button:hover{
        background-color: var(--primary-color);
        color: var(--background-color);
    }
</style>
<button><slot></slot></button>