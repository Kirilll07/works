let М = document.getElementById('М');
let О = document.getElementById('О');
let И = document.getElementById('И');
let Р = document.getElementById('Р');
let А = document.getElementById('А');
let Б = document.getElementById('Б');
let О2 = document.getElementById('О2');
let Т = document.getElementById('Т');
let Ы = document.getElementById('Ы');


window.addEventListener('scroll', function() 
{
    let value = window.scrollY;
    М.style.marginTop = value * 1.05 + 'px';
    О.style.marginLeft = value * 1.05 + 'px';
    И.style.marginBottom = value * 1.05 + 'px';
    Р.style.marginTop = value * 2.05 + 'px';
    А.style.marginRight = value * 0.75 + 'px';
    Б.style.marginBottom = value * 1.50 + 'px';
    Б.style.marginLeft = value * 0.80 + 'px';
    О2.style.marginRight = value * 4.05 + 'px';
    Т.style.marginBottom = value * 0.1 + 'px';
    Ы.style.marginTop = value * 3.05 + 'px';
    Ы.style.marginLeft = value * 1.05 + 'px';
        
}
)
