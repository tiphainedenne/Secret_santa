import random 

list_person = ['Alicia','Anne-Charlotte','Delphine','Hugo','Jean-François','Léo','Nicollin','Patricia','Pierre','Tiphaine']
dict_couple = {'Alicia':'Nicollin',
               'Nicollin':'Alicia',
               'Anne-Charlotte':'Hugo',
               'Hugo':'Anne-Charlotte',
               'Delphine':'Pierre',
               'Pierre':'Delphine',
               'Patricia':'Jean-François',
               'Jean-François':'Patricia',
               'Tiphaine':'Léo',
               'Léo':'Tiphaine'}

def tirage(list_person: list, dict_couple:dict):
    givers = list_person[:]
    receivers = list_person[:]
    
    assignments = {}
    
    random.shuffle(receivers)
    
    for giver in givers:
        available_receivers = [r for r in receivers if r != giver and r not in dict_couple.get(giver, [])]
        
        if not available_receivers:
            return None
        
        chosen = random.choice(available_receivers)
        assignments[giver] = chosen
        receivers.remove(chosen)
    
    return assignments

for _ in range(100):  # Essayer jusqu'à 100 fois
    result = tirage(list_person, dict_couple)
    if result:
        break

print(result)

# function to write wishes list
dict_wishes = {}
def add_wishes_list(person: str, wishes: str):
    if person not in dict_wishes.keys():
        dict_wishes[person] = wishes
    else:
        dict_wishes[person] += wishes
    return dict_wishes 
        
# TODO: quand une personne clique sur le bouton 'ajouter', prendre ce qui a été rempli dans le champ et ça équivaut à "wishes"

# function to get wishes list
def get_wishes_list(person: str):
    # person == celui dont on est sur la page
    receiver = results[person]
    if receiver in dict_wishes.keys():
        return dict_wishes[receiver]
    else:
        return "Désolé, "+receiver+" n'a pas encore complété sa liste de souhaits !"

# TODO: faire tourner cette fonction quand quelqu'un se connecte
# Les phrases à retourner doivent être dans l'encadré liste de souhaits

def get_receiver(person: str):
    return results[person]
