module.exports.getJogosBr = function ($) {
        var arrayJogos = [];
        var arrayConfrontos = ['.ao-vivo', '.futuro', '.passado'];

        for (i = 0; i < arrayConfrontos.length; i++) {
            $('section' + arrayConfrontos[i]).find('.secao-campeonato > article').each(function() {
                var confronto = {};
                var acompanhe = $(this).find('footer.vejamais > span');
                var campInfo = $(this).find('header > h1.titulo');
                var containerResultado = $(this).find('.resultado-time-container > .resultado');
                var containerTimeMandante = $(this).find('.resultado-time-container > div.mandante > span.nome-completo');
                var containerTimeVisitante = $(this).find('.resultado-time-container > div.visitante > span.nome-completo');
                var spanMandante = $(this).find('.placar-mandante');
                var spanVisitante = $(this).find('.placar-visitante');

                if (campInfo != null && campInfo.length > 0) {
                    confronto.campeonato = campInfo.find('span[itemprop=name]').text();
                    confronto.horario = campInfo.find('.hora-local').text().trim();
                } else {
                    confronto.campeonato = "";
                    confronto.horario = "00:00";
                }

                if (acompanhe != null && acompanhe.length > 0) {
                    if (acompanhe.hasClass('sem-transmissao')) {
                        confronto.transmissao = '';
                        confronto.linkTransmissao = false;
                    } else {
                        confronto.linkTransmissao = true;
                        confronto.transmissao = acompanhe.parents('a.link-jogo').attr('href');
                    }
                } else {
                    confronto.transmissao = '';
                    confronto.linkTransmissao = false;
                }

                confronto.mandante = containerTimeMandante.text();
                confronto.visitante = containerTimeVisitante.text();

                if (spanMandante != null && spanMandante.length > 0)
                    confronto.golsMandante = parseInt(spanMandante.text());
                else
                    confronto.golsMandante = 0;

                if (spanVisitante != null && spanVisitante.length > 0)
                    confronto.golsVisitante = parseInt(spanVisitante.text());
                else
                    confronto.golsVisitante = 0;
                arrayJogos.push(confronto);
            });
        }
        return arrayJogos;
}
