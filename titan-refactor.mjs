import * as fs from 'fs';
import * as path from 'path';
import * as esprima from 'esprima';

const targetDir = './basic-logic/algorithms';

function getExports(code) {
    const exportsList = [];
    try {
        const ast = esprima.parseModule(code);

        ast.body.forEach(node => {
            if (node.type === 'ExportNamedDeclaration' && node.declaration) {
                // export const foo = (args) => {}
                if (node.declaration.type === 'VariableDeclaration') {
                    node.declaration.declarations.forEach(decl => {
                        if (decl.id.type === 'Identifier' && decl.init) {
                            const funcName = decl.id.name;
                            let params = [];

                            // Arrow Function or standard Function
                            if (decl.init.type === 'ArrowFunctionExpression' || decl.init.type === 'FunctionExpression') {
                                params = decl.init.params.map(p => {
                                    if (p.type === 'Identifier') return p.name;
                                    if (p.type === 'AssignmentPattern' && p.left.type === 'Identifier') return p.left.name;
                                    if (p.type === 'RestElement' && p.argument.type === 'Identifier') return '...' + p.argument.name;
                                    return 'arg'; // Fallback
                                });
                            }
                            exportsList.push({ name: funcName, args: params });
                        }
                    });
                }
                // export function foo(args) {}
                else if (node.declaration.type === 'FunctionDeclaration') {
                    const funcName = node.declaration.id.name;
                    const params = node.declaration.params.map(p => {
                        if (p.type === 'Identifier') return p.name;
                        if (p.type === 'AssignmentPattern' && p.left.type === 'Identifier') return p.left.name;
                        if (p.type === 'RestElement' && p.argument.type === 'Identifier') return '...' + p.argument.name;
                        return 'arg';
                    });
                    exportsList.push({ name: funcName, args: params });
                }
            }
        });
    } catch (e) {
        console.error("Esprima parsing error on code:", e.message);
    }
    return exportsList;
}

function refactorTitanLogic() {
    const manifest = [];
    const files = fs.readdirSync(targetDir);

    files.forEach(filename => {
        if (!filename.endsWith('.js') || filename === 'algorithms-manifest.json') return;

        const filepath = path.join(targetDir, filename);
        let content = fs.readFileSync(filepath, 'utf8');

        // Regex refactoring for standard function missing exports (porting functionality from old python script)
        const stdFuncPattern = /(?<!export\s)function\s+(\w+)\s*\((.*?)\)\s*\{/g;
        const arrowFuncPattern = /(?<!export\s)const\s+(\w+)\s*=\s*\((.*?)\)\s*=>\s*\{/g;

        let hasNewExports = false;

        if (!content.includes('export ')) {
            const newContent = content
                .replace(stdFuncPattern, 'export const $1 = function($2) {')
                // Using standard functions to retain `arguments` compatibility by default, rather than erroring arrow funcs
                .replace(arrowFuncPattern, 'export const $1 = ($2) => {');

            if (newContent !== content) {
                fs.writeFileSync(filepath, newContent, 'utf8');
                content = newContent;
                console.log(`[+] Refactored logic to export module: ${filename}`);
                hasNewExports = true;
            } else {
                console.log(`[!] No changes needed for target: ${filename}`);
            }
        }

        // Parse with Esprima to build manifest mappings
        const exportsMetadata = getExports(content);

        if (exportsMetadata.length > 0) {
            const title = filename.replace('.js', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            const type = exportsMetadata.length > 1 ? 'Interactive' : 'Simple';
            let description = '';

            if (type === 'Interactive') {
                description = `[Stateful Neural Pathway] Requires interactive parameter injection. Executes advanced multi-stage logic for ${title}.`;
            } else {
                description = `[Standard Heuristic Algorithm] Executes the purely functional protocol for ${title}. Supply the required parameters to compute the sequence.`;
            }

            manifest.push({
                filename: filename,
                type: type,
                exports: exportsMetadata,
                title: title,
                description: description
            });
        } else {
            console.warn(`[WARNING] No exports detected in ${filename} after parsing.`);
        }
    });

    // Write enhanced manifest
    const manifestPath = path.join(targetDir, 'algorithms-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4), 'utf8');
    console.log("[+] Enhanced Algorithm Manifest deployed with telemetry mapping.");
}

console.log("Scanning Neural Link for logic architectures...");
refactorTitanLogic();
console.log("All systems are primed and mapped.");
