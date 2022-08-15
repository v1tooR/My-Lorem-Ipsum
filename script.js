const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu sem, semper vitae suscipit nec, vestibulum vel erat. Pellentesque eu interdum ligula, maximus porta purus. Ut elementum commodo odio et dapibus. Praesent feugiat eros a erat pharetra tempor. In sodales tellus et erat hendrerit dictum. Duis bibendum neque orci, fermentum luctus velit suscipit quis. Nullam malesuada efficitur est, eget pharetra risus feugiat at. Vestibulum consectetur erat in velit venenatis, sed lobortis sem tincidunt. Fusce ullamcorper laoreet dignissim. Vestibulum lectus velit, porta ac vestibulum vitae, facilisis vel diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin commodo leo at rutrum aliquet. Cras rutrum, massa id lacinia ultricies, nunc nunc tincidunt neque, elementum faucibus sapien magna ut elit.`,

    `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,

    `Vestibulum ornare lectus sapien, quis lobortis eros rhoncus eget. Integer tristique magna nunc, vel elementum lorem tristique et. Pellentesque in turpis nec velit ultricies pulvinar vel a nunc. Quisque porta convallis laoreet. Morbi fringilla euismod elit, in tristique ex convallis et. Pellentesque congue odio a mattis euismod. Donec non augue dapibus orci dapibus finibus quis et tellus. Duis pulvinar non ipsum quis lobortis. Nulla lacus ipsum, semper ac maximus non, pulvinar at mi. Praesent quis ullamcorper tortor. Nulla eu eros in ex semper volutpat sed sit amet purus.`,

    `Aenean ut dolor tristique, gravida tortor vitae, luctus velit. Sed id metus eget nisi semper blandit. Integer pretium sem vel velit tincidunt, sit amet gravida velit bibendum. Suspendisse tincidunt purus pharetra urna mollis, vel accumsan est ultricies. Donec at enim eget massa ornare varius. In nec dignissim elit. Morbi nec magna at augue mattis pellentesque. Sed elementum nisi hendrerit orci commodo, id ullamcorper ipsum varius. In eget massa ut mi euismod sollicitudin. Praesent in imperdiet sapien. Aenean enim urna, viverra in porttitor sed, posuere non metus. Morbi aliquet eros sed volutpat pulvinar. Vivamus volutpat justo non dolor pharetra feugiat.`,

    `Nunc nec risus egestas, commodo nulla id, luctus lectus. Donec dapibus sit amet ex id consectetur. Quisque semper tincidunt sagittis. Donec in tempus libero, nec iaculis nulla. Morbi laoreet dictum sem et hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et ante sit amet tortor imperdiet fermentum sit amet sed lacus. Proin eget commodo justo. Cras pretium odio metus, vel finibus urna convallis vel. Nulla facilisi. Phasellus mollis orci odio, et dignissim lacus accumsan at. Integer et nisi venenatis, ullamcorper justo id, condimentum mauris. Aliquam molestie imperdiet nisl.`
];

const form = document.querySelector(".lorem-form");
const qnt = document.getElementById("qnt");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const value = parseInt(qnt.value);
    const random = Math.floor(Math.random() * text.length);

    if(isNaN(value) || value < 0 || value > 9){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }else{
        let tempText = text.slice(0, value);
        tempText = tempText
            .map(function (item){
                return `<p class="result">${item}</p>`;
            })
            .join("");
            result.innerHTML = tempText;
    }
});